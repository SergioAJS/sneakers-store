import styles from "./Card.module.scss";
import { useEffect, useState } from "react";

function Card({ onFavorite, onPlus, title, imageUrl, price }) {
  const [isAdded, setIsAdded] = useState(false);
  const onClickPlus = () => {
    onPlus()
    setIsAdded(!isAdded);
  };

  useEffect(() => {}, [isAdded]);

  const [isFavorite, setIsFavorite] = useState(false);
  const onClickFavorite = () => {
    onFavorite()
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {}, [isFavorite]);

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          onClick={onClickFavorite}
          src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"}
          alt="Favorite"
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className={styles.description}>
        <div>
          <span>Цена:</span>
          <b>{price} руб.</b>
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
