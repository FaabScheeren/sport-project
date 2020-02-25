import React from "react";
import Logo from "./logo192.png";
import Soccer from "./Soccer.jpg";
import "./styles/Header.scss";

export default function(props) {
  return (
    <header>
      <img src={Logo} />
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
              <img src={Soccer} className="image" />
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}
