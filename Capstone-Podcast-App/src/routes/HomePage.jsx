import { useState, useEffect } from "react";
import "../App.css";

import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Filter from "../components/Filter";
import Fuse from "fuse.js";

function HomePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadedShows, setLoadedShows] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("Default");

  useEffect(() => {
    fetch("https://podcast-api.netlify.app/shows")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        setLoadedShows(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const filterShows = () => {
    const fuse = new Fuse(data, {
      includeScore: true,
      keys: ["title"],
    });
    let filtered = searchTerm !== "" ? fuse.search(searchTerm) : data;

    if (filterType === "Default" && searchTerm !== "") {
      filtered.sort((a, b) => {
        b.score - a.score;
      });
    }
    if (searchTerm !== "") {
      filtered = filtered.map((item) => item.item);
    }
    if (filterType === "A-Z") {
      filtered.sort((a, b) => {
        let nameA = a.title.toLowerCase();
        let nameB = b.title.toLowerCase();

        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
    }
    if (filterType === "Z-A") {
      filtered.sort((a, b) => {
        let nameA = a.title.toLowerCase();
        let nameB = b.title.toLowerCase();

        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
        return 0;
      });
    }
    if (filterType === "Oldest") {
      filtered.sort((a, b) => {
        let dateA = new Date(a.updated);
        let dateB = new Date(b.updated);

        return dateA - dateB;
      });
    }
    if (filterType === "Newest") {
      filtered.sort((a, b) => {
        let dateA = new Date(a.updated);
        let dateB = new Date(b.updated);

        return dateB - dateA;
      });
    }
    setLoadedShows(filtered);
  };
  useEffect(() => {
    filterShows();
  }, [searchTerm, filterType]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleFilterSearch = (event) => {
    event.preventDefault();
    const filterSearch = setTimeout(() => {
      setSearchTerm(event.target.form[0].value);
    }, 300);
    return () => clearTimeout(filterSearch);
  };

  const handleFilterSelect = (event) => {
    const filter = event.target.value;
    setFilterType(filter);
  };

  const previewCards = loadedShows.map((show) => {
    return <Card key={show.id} showData={show} />;
  });

  return (
    <div>
      <Header />
      <Filter
        handleFilterSelect={handleFilterSelect}
        handleFilterSearch={handleFilterSearch}
      />
      {previewCards}
      <Footer />
    </div>
  );
}

export default HomePage;
