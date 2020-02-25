import React from "react";
import Logo from "./logo192.png";
import Soccer from "./images/Soccer.jpg";
import FieldHockey from "./images/fieldhockey.jpg";
import Ultimate from "./images/layout.jpg";
import Tennis from "./images/tennis.jpg";
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
              <p>Field Hockey</p>
              <img src={FieldHockey} className="image" />
            </div>
          </a>
          <a href="/">
            <div>
              <p>Ultimate</p>
              <img src={Ultimate} className="image" />
            </div>
          </a>
          <a href="/">
            <div>
              <p>Tennis</p>
              <img src={Tennis} className="image" />
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}
