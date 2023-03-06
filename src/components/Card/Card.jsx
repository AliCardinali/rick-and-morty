import style from "./Card.module.css";

function Card(props) {
  const { name, species, gender, image, onClose } = props;
  console.log(name, species, gender, image);
  return (
    <div>
      <h3>Este es el componente card</h3>
      {
        <div>
          <button onClick={() => onClose} className={style.btnDelete}>
            X
          </button>
          <h2>{name}</h2>

          <h2>{gender}</h2>

          <img src={image} alt={name} />
        </div>
      }
    </div>
  );
}

export default Card;
