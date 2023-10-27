import React from "react";
import Episode from "./Episode";
import AudioPlayer from "./AudioPlayer";

function Season(props) {
    const [isPlaying, setIsPlaying] = React.useState(false)
    const [whatIsPlaying, setWhatIsPlaying] = React.useState({})
    
    function handleClick(props) {
        if (isPlaying === false) {
            setIsPlaying(true)
        }
        console.log(props);
        if (isPlaying) {
            setWhatIsPlaying({...props})
        }
        console.log(whatIsPlaying);
    }

    const episodePreviews = props.data.episodes.map( (episode) => {
        return(
        <Episode 
            data={episode} 
            key={episode.episode} 
            image={props.data.image} 
            showName={props.showName}
            seasonNum={props.data.title.replace(" ", "-")}  
            handleClick={handleClick}
        />
        )
    })
    
    let audio
    if (isPlaying) {
        audio = <AudioPlayer data={whatIsPlaying} />
    }

    return (
        <main >
            {episodePreviews}
            {audio}
        </main>
    )
}

export default Season