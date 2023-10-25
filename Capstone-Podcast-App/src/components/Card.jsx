import React from "react"
import tbaPic from "../images/tba-rubber-stamp-vector-13488968.jpg"

export default function Card(props) {

    return(
        <div className="card">
            <img src={props.data.image} className="card--img" />
            <h3>{props.title}</h3>
        </div>
    )
}