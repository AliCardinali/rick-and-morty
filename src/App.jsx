import { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import About from "./components/About/About";
import Favorites from "./components/Favorites/Favorites.jsx";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form.jsx";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);
  const username = "alicardinali@hotmail.com";
  const password = "Ali1234";

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const logout = () => {
    if (access === true) {
      setAccess(false);
      navigate("/");
    }
  };

  function login(userData) {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    }
  }

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
  //console.log("Estamos compartiendo");
  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };
  //console.log(characters);
  return (
    <div className="App BackgroundImage">
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form Login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
