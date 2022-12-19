function Drawer(props) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Корзина{" "}
          <img className="remove-btn" src="/img/btn-remove.svg" alt="Remove" onClick={props.onClose} />
        </h2>

        <div className="items">
          <div className="cart-item">
            <img
              height={70}
              width={70}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <div className="cart-item-description">
              <p>Мужские кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="remove-btn"
              src="/img/btn-remove.svg"
              alt="Remove"
            />
          </div>

          <div className="cart-item">
            <img
              height={70}
              width={70}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <div className="cart-item-description">
              <p>Мужские кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="remove-btn"
              src="/img/btn-remove.svg"
              alt="Remove"
            />
          </div>

          <div className="cart-item">
            <img
              height={70}
              width={70}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <div className="cart-item-description">
              <p>Мужские кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="remove-btn"
              src="/img/btn-remove.svg"
              alt="Remove"
            />
          </div>
        </div>

        <div className="overall-price">
          <ul>
            <li>
              <span>Итого</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1 074 руб.</b>
            </li>
          </ul>
          <button className="green-button">
            Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
