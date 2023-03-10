import React from "react";
import Card from "../Card/Card.jsx";
import style from "./Cards.module.css";

function Cards(props) {
  const { characters, onClose } = props;
  return (
    <div className={style.CardContainer}>
      {characters.map((el) => (
        <Card
          key={el.id}
          name={el.name}
          species={el.species}
          gender={el.gender}
          image={el.image}
          detailId={el.id}
          onClose={() => onClose(id)}
        />
      ))}
    </div>
  );
}

export default Cards;
