import React from "react";

export default function AudioPlayer(props) {    
    return (
        <div className="audio-player">
            <h3 className="audio-player--title">{props.data.title}</h3>
            <audio autoPlay loop className="audio-player--audio" controls={true}>
                <source src={props.data.file} />
            </audio>
        </div>
    )
}