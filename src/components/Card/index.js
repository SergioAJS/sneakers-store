import styles from "./Card.module.scss";
import { useContext, useEffect, useState } from "react";
import ContentLoader from "react-content-loader";
import { AppContext } from "../../context";

function Card({
  id,
  title,
  thumbnail,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  added = false,
  loading = false,
}) {
  const { isItemAdded } = useContext(AppContext);

  const onClickPlus = () => {
    onPlus();
  };

  const [isFavorite, setIsFavorite] = useState(favorited);
  const onClickFavorite = () => {
    onFavorite();
    setIsFavorite(!isFavorite);
  };

  // useEffect(() => {}, [isFavorite]);

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={265}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />

          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />

          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite}>
            <img
              onClick={onClickFavorite}
              src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"}
              alt="Favorite"
            />
          </div>
          <img width="100%" height="45%" src={thumbnail} alt="Sneakers" />
          <h5>{title}</h5>
          <div className={styles.description}>
            <div>
              <span>Цена:</span>
              <b>${price}</b>
            </div>
            <img
              className={styles.plus}
              onClick={onClickPlus}
              src={isItemAdded(id) ? "img/btn-checked.svg" : "img/btn-plus.svg"}
              alt="Plus"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
