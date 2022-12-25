import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import { useEffect, useState } from "react";

function App() {
  // const [count, setCount] = useState(5)
  // const plus = () => {
  //   setCount(count + 1)
  // }
  // const minus = () => {
  //   setCount(count - 1)
  // }
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10")
      .then((res) => {
        return res.json();
      })
      .then((json) => setItems(json.products))
      .catch((err) => console.log(err));
  }, []);

  const onAddToCart = (obj) => {
    // setCartItems(cartItems.concat(obj))
    setCartItems([...cartItems, obj]);
  };

  return (
    <div className="wrapper">
      {/* <center>
        <h1>{count}</h1>
        <button onClick={plus}>+</button>
        <button onClick={() => minus()}>-</button>
      </center> */}

      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content">
        <div className="search">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск" type="text" />
          </div>
        </div>

        <div className="cards">
          {items.map((item, index) => (
            <Card
              title={item.title}
              price={item.price}
              thumbnail={item.thumbnail}
              onPlus={(obj) => onAddToCart(obj)}
              onFavorite={() => console.log(item)}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
