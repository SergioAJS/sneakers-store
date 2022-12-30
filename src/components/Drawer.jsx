import { useContext, useState } from "react";
import { Info } from "./Info";
import { AppContext } from "../context";
import axios from "axios";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ items, onClose, onRemove }) {
  const { cartItems, setCartItems } = useContext(AppContext);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://63a8814df4962215b583b49f.mockapi.io/orders",
        { items: cartItems }
      );
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i += 1) {
        const item = cartItems[i];
        await axios.delete(
          "https://63a8814df4962215b583b49f.mockapi.io/cart/" + item.id
        );
        await delay(1000);
      }
    } catch (error) {
      alert("Не удалось создать заказ (:");
    }
    setIsLoading(false);
  };

  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Корзина{" "}
          <img
            className="remove-btn"
            src="/img/btn-remove.svg"
            alt="Remove"
            onClick={onClose}
          />
        </h2>

        {items.length > 0 ? (
          <>
            <div className="items">
              {items.map((obj) => (
                <div className="cart-item" key={obj.title}>
                  <img
                    height={70}
                    width={70}
                    src={obj.thumbnail}
                    alt="Sneakers"
                  />
                  <div className="cart-item-description">
                    <p>{obj.title}</p>
                    <b>${obj.price}</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="remove-btn"
                    src="/img/btn-remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>
            <div className="overall-price">
              <ul>
                <li>
                  <span>Итого</span>
                  <div></div>
                  <b>$21 498</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>$1 074</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                className="green-button"
                onClick={onClickOrder}
              >
                Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </>
        ) : (
          <Info
            title={isOrderComplete ? "Заказ оформлен" : "Корзина пустая"}
            description={
              isOrderComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
            image={
              isOrderComplete
                ? "/img/complete-order.jpg"
                : "/img/empty-cart.jpg"
            }
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
