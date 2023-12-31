import React from "react";
import notFavourite from "../images/off.png";
import favourite from "../images/on.png";

export default function Episode(props) {
  return (
    <div className="">
      <div
        onClick={() => {
          props.handleClick(props.data);
        }}
        className="episode-preview"
      >
        <img src={props.image} className="episode-preview--image" />
        <div className="episode-preview--text">
          <h3 className="episode-preview--text-title">{props.data.title}</h3>
          <p className="episode-preview--text-description">
            {props.data.description}
          </p>
        </div>
      </div>
      <div className="episode-preview--fav">
        <img
          src={favourite}
          onClick={props.toggleFavourite}
          className="episode-preview--fav-img"
        />
      </div>
    </div>
  );
}
