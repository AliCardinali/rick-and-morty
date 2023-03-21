import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/action";
import { useState, useEffect } from "react";

function Card(props) {
  const {
    id,
    name,
    species,
    gender,
    image,
    onClose,
    detailId,
    addFavorite,
    removeFavorite,
    myFavorites,
  } = props;

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
        //console.log(isFav);
      }
    });
  }, [myFavorites]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavorite(id);
    } else {
      setIsFav(true);
      addFavorite({
        id,
        name,
        species,
        gender,
        image,
        onClose,
        detailId,
        addFavorite,
        removeFavorite,
      });
    }
  };

  return (
    <div className={style.container}>
      {isFav ? (
        <button
          onClick={() => {
            handleFavorite(id);
          }}
        >
          ❤️
        </button>
      ) : (
        <button
          onClick={() => {
            handleFavorite();
          }}
        >
          🤍
        </button>
      )}

      <div className={style.back}>
        <button onClick={onClose} className={style.btnDelete}>
          X
        </button>

        <Link to={`/detail/${detailId}`}>
          <h2 className={style.title}> {name}</h2>
          <h2 className={style.title}>{gender}</h2>
          <img src={image} alt={name} />
          <h2 className={style.title}>{species}</h2>
        </Link>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => {
      dispatch(addFavorite(character));
    },
    removeFavorite: (id) => {
      dispatch(removeFavorite(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
