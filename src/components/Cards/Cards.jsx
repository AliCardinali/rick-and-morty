import React from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css";

function Cards(characters, onClose) {
  return (
    <div className={style.CardContainer}>
      {characters.map((character) => {
        return (
          <Card
            key={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={() => onClose(character.id)}
          />
        );
      })}
      <h1>esta funcionando</h1>
    </div>
  );
}

export default Cards;
