import React from "react"
import genreList from "../genres"

export default function Card(props) {
    const updated = new Date(props.showData.updated)
    const lastUpdated = `${updated.getDate()}/${updated.getMonth()+1}/${updated.getFullYear()}`

    const genres = []
    props.showData.genres.forEach((genre) => {
        genreList.map( (key) => {if (genre === key.id) {genres.push(key.genre)} })
    })
    console.log(genres);

    let genreText = "-"
    genres.forEach((element) => {
        genreText += element+"-"
    })

    return(
        <div className="card">
            <img src={props.showData.image} className="card--img" />
            <div className="card--text">
                <h3 className="card--text-title" >{props.showData.title}</h3>
                <h5 className="card--text-seasons h5">No. of Seasons: {props.showData.seasons}</h5>
                <h5 className="card--text-genres h5">Genres: {genreText}</h5>
                <h6>Last updated: {lastUpdated}</h6>
            </div>    
        </div>
    )
}

// <p className="card--text-description">{props.showData.description}</p>