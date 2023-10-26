import {React, useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import '../App.css'

import Header from "../components/Header";
import Season from "../components/Season";

function Show() {
    const {showId} = useParams()
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [seasonSelect, setSeasonSelect] = useState(1)
    

    useEffect(() => {
        fetch(`https://podcast-api.netlify.app/id/${showId}`)
        .then(response => response.json())
        .then(data => {
            setData(data);
            setLoading(false);
        })
        .catch(error => console.error('Error:', error));
        }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    
    const seasonChoice = data.seasons.map( (season) => {
        return (
        <option value={season.season} key={season.season}>{season.season}</option>)
    })

    const handleSeasonSelect = (event) => {
        const optionValue = event.target.value;
        setSeasonSelect(optionValue)
    }

    return (
        <div className="show">
            <Header />

            <h1>{data.title}</h1>
            <img src={data.image} className="show--image" />
            <p className="show--description">{data.description}</p>
            <div className="season--selector">
                <p>Season:</p>
                <select onChange={handleSeasonSelect} >
                    {seasonChoice}
                </select>
            </div>
            <Season data={data.seasons[seasonSelect-1]} />
        </div>
    )
}

export default Show