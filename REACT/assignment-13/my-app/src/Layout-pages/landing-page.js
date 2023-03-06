import React from "react";
import { Link } from "react-router-dom";
import "./landing-page.css";

export function LandingPage() {
  return (
    <div className="main">
      <div className="left">
        <img className="icon" src="img/icon.png" alt="icon" />
      </div>
      <div className="right">
        <h1 className="heading">Welocome to Instaclone</h1>
        <Link to="/profile">
          <button className="btn">Enter</button>
        </Link>
      </div>
    </div>
  );
}
