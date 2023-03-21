import React, { useState } from "react";
import style from "./SearchBar.module.css";

function SearchBar({ onSearch }) {
  const [characterId, setCharacterId] = useState("");

  const handleCase = (event) => {
    setCharacterId(event.target.value);
  };

  const handleRandomCharacter = () => {
    const randomId = Math.floor(Math.random() * 826) + 1;
    props.onSearch(randomId);
    setId("");
  };

  return (
    <div className={style.SearchBar}>
      <>
        <input
          type="search"
          value={characterId}
          onChange={handleCase}
          className={style.border}
          placeholder="Search..."
        />
        <button onClick={() => onSearch(characterId)} className={style.btn}>
          Add
        </button>
      </>
      <button onClick={() => handleRandomCharacter} className={style.btn}>
        Random
      </button>
    </div>
  );
}
export default SearchBar;
