import React from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css";

function Cards(characters, onClose) {
  return (
    <div className={style.CardContainer}>
      {/* {characters.map(({ id, name, species, gender, image }) => {
        return (
          <Card
            key={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={() => onClose(id)}
          />
        );
      })} */}
      <h1>esta funcionando</h1>
    </div>
  );
}

export default Cards;
