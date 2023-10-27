import React from "react";
import favourite from "../images/off.png"

export default function Episode(props) {
    
    return (
        <div onClick={() => props.handleClick(props.data)} className="episode-preview">
            <img src={props.image} className="episode-preview--image" />
            <div className="episode-preview--text">
                <h3 className="episode-preview--text-title">{props.data.title}</h3>
                <p className="episode-preview--text-description">{props.data.description}</p>
            </div>
            <img src={favourite} />
        </div >
    )
}