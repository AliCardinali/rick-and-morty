import React, { useState } from "react";
import style from "./SearchBar.module.css";

function SearchBar({ onSearch }) {
  const [character, setCharacter] = useState("");

  const handleCase = (event) => {
    setCharacter(event.target.value);
  };
  return (
    <>
      <input
        type="search"
        value={character}
        placeholder="Search..."
        className={style.border}
        onChange={handleCase}
      />
      <button onClick={() => onSearch(character)} className={style.btn}>
        Add
      </button>
    </>
  );
}
export default SearchBar;
