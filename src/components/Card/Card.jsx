import style from "./Card.module.css";

function Card(props) {
  const { name, species, gender, image, onClose } = props;
  console.log(name, species, gender, image);
  return (
    <div className={style.container}>
      {
        <div className={style.back}>
          <button onClick={() => onClose} className={style.btnDelete}>
            X
          </button>
          <h2>
            className={style.name}
            {name}
          </h2>
          <h2>
            className={style.title} {species}
          </h2>
          <h2>
            className={style.title}
            {gender}
          </h2>

          <img src={image} alt={name} />
        </div>
      }
    </div>
  );
}

export default Card;
