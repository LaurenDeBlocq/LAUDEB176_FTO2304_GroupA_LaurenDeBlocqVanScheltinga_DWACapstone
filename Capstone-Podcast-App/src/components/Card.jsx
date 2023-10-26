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
        <div className="card"  >
            <img src={props.showData.image} className="card--img" />
            <div className="card--text">
                <h4 className="card--text-title" >{props.showData.title}</h4>
                <h5 className="card--text-seasons card--text-item ">No. of Seasons: <strong>{props.showData.seasons}</strong></h5>
                <h5 className="card--text-genres card--text-item"><u>Genres:</u><br /><strong>{genreText}</strong></h5>
                <h6 className="card--text-item"><u>Last updated:</u> <strong>{lastUpdated}</strong></h6>
            </div>    
        </div>
    )
}

// <p className="card--text-description">{props.showData.description}</p>