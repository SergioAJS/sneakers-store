function App() {
  return (
    <div className="wrapper">

      <div className="overlay">
        <div className="drawer">
          <h2>Корзина <img className="remove-btn" src="/img/btn-remove.svg" alt="Remove"/>
</h2>

          <div className="items">

            <div className="cart-item">
              <img height={70} width={70} src="/img/sneakers/1.jpg" alt="Sneakers"/>
              <div className="cart-item-description">
                <p>
                  Мужские кроссовки Nike Air Max 270
                </p>
                <b>12 999 руб.</b>
              </div>
              <img className="remove-btn" src="/img/btn-remove.svg" alt="Remove"/>
            </div>

            <div className="cart-item">
              <img height={70} width={70} src="/img/sneakers/1.jpg" alt="Sneakers"/>
              <div className="cart-item-description">
                <p>
                  Мужские кроссовки Nike Air Max 270
                </p>
                <b>12 999 руб.</b>
              </div>
              <img className="remove-btn" src="/img/btn-remove.svg" alt="Remove"/>
            </div>

            <div className="cart-item">
              <img height={70} width={70} src="/img/sneakers/1.jpg" alt="Sneakers"/>
              <div className="cart-item-description">
                <p>
                  Мужские кроссовки Nike Air Max 270
                </p>
                <b>12 999 руб.</b>
              </div>
              <img className="remove-btn" src="/img/btn-remove.svg" alt="Remove"/>
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
            <button className="green-button">Оформить заказ <img src="/img/arrow.svg" alt="Arrow" /></button>
          </div>

        </div>
      </div>

      <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" alt="logo"/>
          <div className="headerInfo">
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.54548 18.1818C7.99735 18.1818 8.36366 17.8155 8.36366 17.3636C8.36366 16.9117 7.99735 16.5454 7.54548 16.5454C7.09361 16.5454 6.72729 16.9117 6.72729 17.3636C6.72729 17.8155 7.09361 18.1818 7.54548 18.1818Z" stroke="#9B9B9B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16.5455 18.1818C16.9973 18.1818 17.3637 17.8155 17.3637 17.3636C17.3637 16.9117 16.9973 16.5454 16.5455 16.5454C16.0936 16.5454 15.7273 16.9117 15.7273 17.3636C15.7273 17.8155 16.0936 18.1818 16.5455 18.1818Z" stroke="#9B9B9B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H5.09091" stroke="#9B9B9B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={20} height={20} src="/img/user.svg" alt="logo"/>
          </li>
        </ul>
      </header>
      <div className="content">
        <div className="search">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск" type="text" />
          </div>
        </div>
        <div className="cards">

          <div className="card">
            <div className="favorite">
              <img src="/img/unliked.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src="img/sneakers/1.jpg" alt="Sneakers" />
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className="description">
              <div>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="img/sneakers/2.jpg" alt="Sneakers" />
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className="description">
              <div>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="img/sneakers/3.jpg" alt="Sneakers" />
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className="description">
              <div>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="img/sneakers/4.jpg" alt="Sneakers" />
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className="description">
              <div>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
