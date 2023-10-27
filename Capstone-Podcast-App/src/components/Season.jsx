import React from "react";
import Episode from "./Episode";

function Season(props) {

    const episodePreviews = props.data.episodes.map( (episode) => {
        return(
        <Episode 
            data={episode} 
            key={episode.episode} 
            image={props.data.image} 
            showName={props.showName}
            seasonNum={props.data.title.replace(" ", "-")}  
        />
        )
    })


    return (
        <main >
            {/* <img src={props.data.image} className="season--image" />            */}
            {episodePreviews}
        </main>
    )
}

export default Season