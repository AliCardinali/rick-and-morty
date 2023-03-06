import React, { useState } from "react";
import style from "./SearchBar.module.css";

function SearchBar({ onSearch }) {
  const [characterId, setCharacterId] = useState("");

  const handleCase = (event) => {
    setCharacterId(event.target.value);
  };
  return (
    <>
      <input
        type="search"
        onChange={handleCase}
        className={style.border}
        placeholder="Search..."
      />
      <button onClick={() => onSearch(characterId)} className={style.btn}>
        Add
      </button>
    </>
  );
}
export default SearchBar;
