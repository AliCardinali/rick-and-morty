import { Link } from "react-router-dom";
import style from "./Card.module.css";

function Card(props) {
  const { name, species, gender, image, onClose, detailId } = props;
  console.log(name, species, gender, image);
  return (
    <div className={style.container}>
      {
        <div className={style.back}>
          <button onClick={() => onClose} className={style.btnDelete}>
            X
          </button>
          <Link to={`/detail/${detailId}`}>
            <h2 className={style.title}> {name}</h2>
          </Link>
          <h2 className={style.title}>{gender}</h2>
          <img src={image} alt={name} />
          <h2 className={style.title}>{species}</h2>
        </div>
      }
    </div>
  );
}

export default Card;
