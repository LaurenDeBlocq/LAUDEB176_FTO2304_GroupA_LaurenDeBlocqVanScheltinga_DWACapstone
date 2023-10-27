import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Season from "../components/Season";

export default function SeasonPage() {
    
    const seasonChoice = data.seasons.map( (season) => {
        return (
        <option value={season.season} key={season.season}>{season.season}</option>)
    })

    const handleSeasonSelect = (event) => {
        const optionValue = event.target.value;
        setSeasonSelect(optionValue)
    }
    return (
        <>
            <Header />

            <div className="season--selector">
                <p>Season:</p>
                <select onChange={handleSeasonSelect} >
                    {seasonChoice}
                </select>
            </div>
            <Season data={data.seasons[seasonSelect-1]} showName={data.title.replaceAll(" ", "-")} />

            <Footer />
        </>
    )
}