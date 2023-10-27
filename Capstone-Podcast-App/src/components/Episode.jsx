import React from "react";
import { Link } from "react-router-dom";

export default function Episode(props) {
    console.log(props);
    
    return (
        <Link to={`${props.showName}/${props.seasonNum}/${props.data.episode}`} className="episode-preview">
            <img src={props.image} className="episode-preview--image" />
            <div className="episode-preview--text">
                <h3 className="episode-preview--text-title">{props.data.title}</h3>
                <p className="episode-preview--text-description">{props.data.description}</p>
            </div>
        </Link >
    )
}