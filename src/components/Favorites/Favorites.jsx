import { useSelector } from "react-redux";

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);

  return (
    <>
      {favorites.map((id, name, species, gender, image) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            detailId={id}
          />
        );
      })}
    </>
  );
};
export default Favorites;
