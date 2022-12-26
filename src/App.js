import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=10").then((res) => {
      setItems(res.data.products);
    });
    axios
      .get("https://63a8814df4962215b583b49f.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
    axios
      .get("https://63a8814df4962215b583b49f.mockapi.io/favorites")
      .then((res) => {
        setFavorites(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    // setCartItems(cartItems.concat(obj))
    axios.post("https://63a8814df4962215b583b49f.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://63a8814df4962215b583b49f.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post(
          "https://63a8814df4962215b583b49f.mockapi.io/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в фавориты");
    }
  };

  const onRemoveFromCart = (id) => {
    axios.delete(`https://63a8814df4962215b583b49f.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <Routes>
      <Route
        path="/"
        exact
        element={
          <div className="wrapper">
            {cartOpened && (
              <Drawer
                items={cartItems}
                onClose={() => setCartOpened(false)}
                onRemove={onRemoveFromCart}
              />
            )}
            <Header onClickCart={() => setCartOpened(true)} />
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
            />
          </div>
        }
      ></Route>
      <Route
        path="/favorites"
        exact
        element={
          <div className="wrapper">
            {cartOpened && (
              <Drawer
                items={cartItems}
                onClose={() => setCartOpened(false)}
                onRemove={onRemoveFromCart}
              />
            )}
            <Header onClickCart={() => setCartOpened(true)} />
            <Favorites
              items={favorites}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
            />
          </div>
        }
      ></Route>
    </Routes>
  );
}

export default App;
