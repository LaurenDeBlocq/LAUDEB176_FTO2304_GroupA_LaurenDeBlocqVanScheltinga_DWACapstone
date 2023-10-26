import React from "react";

export default function Episode(props) {
    console.log(props.data);
    
    return (
        <div className="episode-preview">
            <img src={props.image} className="episode-preview--image" />
            <div className="episode-preview--text">
                <h3 className="episode-preview--text-title">{props.data.title}</h3>
                <p className="episode-preview--text-description">{props.data.description}</p>
            </div>
        </div>
    )
}