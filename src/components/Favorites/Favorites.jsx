import { useSelector } from "react-redux";
import Card from "../Card/Card.jsx";

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);

  console.log(favorites);
  return (
    <>
      {favorites.map(({ id, name, species, gender, image }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
          />
        );
      })}
    </>
  );
};
export default Favorites;
