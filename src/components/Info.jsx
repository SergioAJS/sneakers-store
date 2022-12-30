import React, { useContext } from "react";
import { AppContext } from "../context";

export const Info = ({ title, description, image }) => {
  const { setCartOpened } = useContext(AppContext);

  return (
    <>
      <img className="cartImage" src={image} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => setCartOpened(false)}>Вернуться назад</button>
    </>
  );
};
