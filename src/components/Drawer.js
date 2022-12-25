function Drawer({ items, onClose }) {
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

        <div className="items">
          {items.map((obj) => (
            <div className="cart-item" key={obj.title}>
              <img height={70} width={70} src={obj.thumbnail} alt="Sneakers" />
              <div className="cart-item-description">
                <p>{obj.title}</p>
                <b>${obj.price}</b>
              </div>
              <img
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
          <button className="green-button">
            Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
