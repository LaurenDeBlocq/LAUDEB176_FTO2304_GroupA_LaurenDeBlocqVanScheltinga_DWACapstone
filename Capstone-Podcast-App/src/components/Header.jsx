import React from "react";
import logo from "../images/on-air.png";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="header">
      <div className="header--logo">
        <img src={logo} className="header--logo-img" />
        <h3 className="header--logo-name">
          On Air
          <br />
          Podcasts
        </h3>
      </div>
      <Navbar />
    </header>
  );
}
