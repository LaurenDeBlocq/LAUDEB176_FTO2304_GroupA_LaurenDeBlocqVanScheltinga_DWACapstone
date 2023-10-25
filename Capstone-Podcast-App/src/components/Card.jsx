import React from "react"

export default function Card(props) {

    return(
        <div className="card">
            <img src={props.showData.image} className="card--img" />
            <div className="card--text">
                <h3 className="card--text-title" >{props.showData.title}</h3>
                <h4 className="card--text-seasons">No. of Seasons: {props.showData.seasons}</h4>
            </div>    
        </div>
    )
}

// <p className="card--text-description">{props.showData.description}</p>