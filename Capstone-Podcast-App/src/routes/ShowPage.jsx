import {React, useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import '../App.css'

import Header from "../components/Header";
import Footer from "../components/Footer";
import SeasonCard from "../components/SeasonCard";

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

    const seasonCards = data.seasons.map( (season) => {
        return( <SeasonCard data={season} key={season.season} /> )
    })
    
    // const seasonChoice = data.seasons.map( (season) => {
    //     return (
    //     <option value={season.season} key={season.season}>{season.season}</option>)
    // })

    // const handleSeasonSelect = (event) => {
    //     const optionValue = event.target.value;
    //     setSeasonSelect(optionValue)
    // }

    return (
        <div className="show">
            <Header />
            <div className="show--text">
                <h1>{data.title}</h1>
                <img src={data.image} className="show--image" />
                <p className="show--description">{data.description}</p>
            </div>    

            {seasonCards}

            <Footer />
        </div>
    )
}

export default Show