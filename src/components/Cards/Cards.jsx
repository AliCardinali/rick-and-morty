import React from "react";
import Card from "../Card/Card.jsx";
import style from "./Cards.module.css";

function Cards(props) {
  const { characters, onClose } = props;
  return (
    <div className={style.CardContainer}>
      {characters.map(({ id, name, species, gender, image }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            detailId={id}
            onClose={() => onClose(id)}
          />
        );
      })}
    </div>
  );
}

export default Cards;
