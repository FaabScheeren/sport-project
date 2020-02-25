import React from "react";

export default function Articles(props) {
  return (
    <div>
      <img src={props.image} />
      <h3>{props.title}</h3>
      <p>{props.summary}</p>
    </div>
  );
}
