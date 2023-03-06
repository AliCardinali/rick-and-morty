import Cards from "../Cards/Cards.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";

const Nav = ({ onSearch }) => {
  return (
    <div>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Nav;
