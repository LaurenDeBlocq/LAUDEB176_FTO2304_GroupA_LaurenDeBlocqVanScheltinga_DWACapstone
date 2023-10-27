import React, { useEffect } from "react";
import Episode from "./Episode";
import AudioPlayer from "./AudioPlayer";

function Season(props) {
    const [isPlaying, setIsPlaying] = React.useState(false)
    const [whatIsPlaying, setWhatIsPlaying] = React.useState({
        title: "",
        description: "",
        episode: 0,
        file: "",
    })
            
    function handleClick(props) {
        setWhatIsPlaying(props)
    }
    useEffect(()=>{
        setIsPlaying(true)
    },[whatIsPlaying])

    useEffect(() => {
        setWhatIsPlaying({ title: "",
        description: "",
        episode: 0,
        file: "",})
    }, [props.data.season])

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
    if (whatIsPlaying.file) {
        audio = <AudioPlayer key={whatIsPlaying.title} data={whatIsPlaying} />
    }

    return (
        <main >
            {episodePreviews}
            {audio}
        </main>
    )
}

export default Season