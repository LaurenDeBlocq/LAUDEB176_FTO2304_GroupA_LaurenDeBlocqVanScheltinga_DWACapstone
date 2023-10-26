import React from "react"
import { useParams } from "react-router-dom"

function Show() {
    const {showId} = useParams()
    
    return (
        <h1>Sanity checks all round the show {showId}</h1>
    )
}

export default Show