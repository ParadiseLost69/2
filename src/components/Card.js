import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="card" id={props.id}>
      <h1 id={props.id}> {props.itemName}</h1>
      <h2 id={props.id}> {props.cost}</h2>

      <button id={props.id} onClick={(e) => props.removeFromCart(e)}>
        {" "}
        -- Remove from cart
      </button>
      <button id={props.id} onClick={(event) => props.addToCart(event)}>
        ++ Add item to cart
      </button>
    </div>
  );
}
