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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const cartResponse = await axios.get(
        "https://63a8814df4962215b583b49f.mockapi.io/cart"
      );

      const favoritesResponse = await axios.get(
        "https://63a8814df4962215b583b49f.mockapi.io/favorites"
      );

      const itemsResponse = await axios.get(
        "https://dummyjson.com/products?limit=10"
      );
      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data.products);
    }
    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    // setCartItems(cartItems.concat(obj))
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(
          `https://63a8814df4962215b583b49f.mockapi.io/cart/${obj.id}`
        );
        setCartItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        axios.post("https://63a8814df4962215b583b49f.mockapi.io/cart", obj);
        setCartItems((prev) => [...prev, obj]);
      }
    } catch (error) {}
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
              cartItems={cartItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
              isLoading={isLoading}
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
