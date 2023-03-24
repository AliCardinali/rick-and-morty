import { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import About from "./components/About/About";
import Favorites from "./components/Favorites/Favorites.jsx";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form.jsx";
import Error404 from "./components/Error404/Error404";

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
    //console.log(characterId);
    fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          characters.find((chart) => chart.id === data.id) === undefined
            ? setCharacters((characters) => [...characters, data])
            : alert("No se puede mostrar personajes repetidos");
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
      {location.pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />}

      <Routes>
        <Route path="/" element={<Form Login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
