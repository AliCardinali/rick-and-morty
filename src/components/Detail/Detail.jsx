import { useState, useEffect, Component } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "./Detail.module.css";

export default function Detail() {
  const { detailId } = useParams();
  console.log(detailId);

  const navigate = useNavigate();

  const [character, setCharacter] = useState({});
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <div>
        <button onClick={handleClick}>Volver</button>
      </div>
      {character ? (
        <div>
          <div className={style.character}>
            <h1>{character.name}</h1>
            <h3>{character.status}</h3>
            <h3>{character.specie}</h3>
            <h3>{character.gender}</h3>
            <h3>{character.origin?.name}</h3>
          </div>
          <div>
            <img src={character.image} alt={character.name} />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
