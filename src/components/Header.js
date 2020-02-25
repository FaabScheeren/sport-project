import React from "react";
import Soccer from "./Soccer.jpg";
import "./styles/Header.scss";

export default function(props) {
  return (
    <header>
      <h1 className="siteName">Sport news</h1>
      <nav className="nav-bar">
        <div className="wrapper">
          <a href="/">
            <div>
              <p>Soccer</p>
              <img src={Soccer} className="image" />
            </div>
          </a>
          <a href="/">
            <div>
              <p>Soccer</p>
              <img src={Soccer} className="image" />
            </div>
          </a>
          <a href="/">
            <div>
              <p>Soccer</p>
              <img src={Soccer} className="image" />
            </div>
          </a>
          <a href="/">
            <div>
              <p>Soccer</p>
              <img src={Soccer} className="image" alt="test" />
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}
