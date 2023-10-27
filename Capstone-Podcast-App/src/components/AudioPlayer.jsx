import React from "react";

export default function AudioPlayer(props) {
    console.log(props)
    
    return (
        <div className="audio-player">
            <h3 className="audio-player--title">{props.title}</h3>
            <audio className="audio-player--audio" controls={true}>
                <source src="props.data.file" />
            </audio>
        </div>
    )
}