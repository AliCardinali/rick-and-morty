import SearchBar from "../SearchBar/SearchBar.jsx";
import { Link } from "react-router-dom";
import About from "../About/About.jsx";

function Nav(props) {
  const { onSearch } = props;
  return (
    <div>
      <Link to="/">
        <h3>HOME</h3>
      </Link>
      <Link to="/about" element={<About />}>
        <h3>ABOUT</h3>
      </Link>
      <Link to="/favorites">
        <h3>FAVORITES</h3>
      </Link>
      <Link to="/home">
        <h3>LOGOUT</h3>
      </Link>

      <SearchBar onSearch={onSearch} />
    </div>
  );
}
export default Nav;
