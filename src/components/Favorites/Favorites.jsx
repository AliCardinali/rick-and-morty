import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card.jsx";
import { orderCards, filterCards } from "../../redux/action";

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);

  console.log(favorites);

  const handlerOrder = (event) => {
    useDispatch(orderCards(event.target.value));
  };

  const handlerFilter = (event) => {
    useDispatch(filterCards(event.target.value));
  };

  return (
    <>
      <div>
        <select onChange={handlerOrder}>
          <option value="Order" disabled="disable">
            Order By
          </option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select onChange={handlerFilter}>
          <option value="Filter" disabled="disable">
            Filter By
          </option>
          <option value="Male">Male</option>
          <option value="Femele">Femele</option>
          <option value="Unknown">Unknown</option>
          <option value="Genderless">Genderless</option>
        </select>
      </div>
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
