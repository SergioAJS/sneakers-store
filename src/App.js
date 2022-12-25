import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import { useEffect, useState } from "react";
import axios from "axios";

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
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=10").then((res) => {
      setItems(res.data.products);
    });
    axios.get("https://63a8814df4962215b583b49f.mockapi.io/cart").then((res) => {setCartItems(res.data)})
  }, []);

  const onAddToCart = (obj) => {
    // setCartItems(cartItems.concat(obj))
    axios.post("https://63a8814df4962215b583b49f.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveFromCart = (id) => {
    axios.delete(`https://63a8814df4962215b583b49f.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper">
      {/* <center>
        <h1>{count}</h1>
        <button onClick={plus}>+</button>
        <button onClick={() => minus()}>-</button>
      </center> */}

      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveFromCart}/>
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content">
        <div className="search">
          <h1>
            {searchValue
              ? `Поиск по запросу: "${searchValue}"`
              : "Все кроссовки"}
          </h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className="clear remove-btn"
                src="/img/btn-remove.svg"
                alt="Clear"
              />
            )}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск"
              type="text"
            />
          </div>
        </div>

        <div className="cards">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, index) => (
              <Card
                title={item.title}
                price={item.price}
                thumbnail={item.thumbnail}
                onPlus={() => onAddToCart(item)}
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
