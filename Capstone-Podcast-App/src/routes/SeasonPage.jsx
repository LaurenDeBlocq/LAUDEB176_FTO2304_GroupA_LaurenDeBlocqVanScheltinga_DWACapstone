import { React, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Season from "../components/Season";

export default function SeasonPage() {
  const { showId, seasonId } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [seasonSelect, setSeasonSelect] = useState(seasonId);

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

  const seasonChoice = data.seasons.map((season) => {
    return (
      <option value={season.season} key={season.season}>
        {season.season}
      </option>
    );
  });

  const handleSeasonSelect = (event) => {
    const optionValue = event.target.value;
    setSeasonSelect(optionValue);
  };

  return (
    <>
      <Link to={"/show/" + showId}>
        <button className="page-button">Back</button>
      </Link>

      <div className="show--text">
        <h1>{data.title}</h1>
        <img src={data.image} className="show--image" />
        <p className="show--description">{data.description}</p>
      </div>

      <div className="season--selector">
        <p>Season:</p>
        <select defaultValue={seasonId} onChange={handleSeasonSelect}>
          {seasonChoice}
        </select>
      </div>
      <Season
        data={data.seasons[seasonSelect - 1]}
        showName={data.title.replaceAll(" ", "-")}
      />
    </>
  );
}
