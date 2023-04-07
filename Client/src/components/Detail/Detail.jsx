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
          {/* <div className={style.character}>
            <h1>{character.name}</h1>
            <h2>{character.status}</h2>
            <h2>{character.specie}</h2>
            <h2>{character.origin?.name}</h2>
            <img src={character.image} alt={character.name} />
            <h2>{character.gender}</h2>
          </div> */}
          <div className={style.character}>
            <h2>Name: {character.name}</h2>
            <h2>Status: {character.status}</h2>
            <h1>Specie: {character.species}</h1>
            <h1>Gender: {character.gender}</h1>
            <h1>Origin: {character.origin?.name}</h1>
            <h1>location: {character.location?.name}</h1>
            <button className={style.boton} onClick={() => navigate(-1)}>
              Regresar
            </button>
            <img src={character.image} alt="" />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
