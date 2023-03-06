import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (characterId) => {
    fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((characters) => [...characters, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };
  console.log(characters);
  return (
    <div>
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
