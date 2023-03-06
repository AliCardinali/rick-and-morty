import React from "react";
import Card from "../Card/Card.jsx";
import style from "./Cards.module.css";

function Cards(props) {
  const { characters, onClose } = props;
  return (
    <div>
      <h2>Este es el componente Cards</h2>

      {characters.map((el) => (
        <Card key={el.id} name={el.name} image={el.image} />
      ))}
    </div>
  );
}

export default Cards;
