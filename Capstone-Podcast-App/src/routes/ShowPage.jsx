import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import { Link } from "react-router-dom";

import SeasonCard from "../components/SeasonCard";

function Show() {
  const { showId } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [seasonSelect, setSeasonSelect] = useState(1);

  useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${showId}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  const seasonCards = data.seasons.map((season) => {
    return <SeasonCard data={season} key={season.season} />;
  });

  return (
    <div className="show">
      <Link to={"/"}>
        <button className="page-button">Back</button>
      </Link>
      <div className="show--text">
        <h1>{data.title}</h1>
        <img src={data.image} className="show--image" />
        <p className="show--description">{data.description}</p>
      </div>

      {seasonCards}
    </div>
  );
}

export default Show;
