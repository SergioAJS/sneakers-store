import styles from "./Card.module.scss";
import { useEffect, useState } from "react";

function Card(props) {
  const [isAdded, setIsAdded] = useState(false);
  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };

  useEffect(() => {
    console.log("changed");
  }, [isAdded]);

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className={styles.description}>
        <div>
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? "img/btn-checked.svg" : "img/btn-plus.svg"}
          alt="Plus"
        />
      </div>
    </div>
  );
}

export default Card;
