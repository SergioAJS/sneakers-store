import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";
import { AppContext } from "./context";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const [cartResponse, favoritesResponse, itemsResponse] =
          await Promise.all([
            axios.get("https://63a8814df4962215b583b49f.mockapi.io/cart"),
            axios.get("https://63a8814df4962215b583b49f.mockapi.io/favorites"),
            axios.get("https://dummyjson.com/products?limit=10"),
          ]);
        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data.products);
      } catch (error) {
        alert("Ошибка при запросе данных");
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    // setCartItems(cartItems.concat(obj))
    try {
      const findItem = cartItems.find(
        (item) => Number(item.parentId) === Number(obj.id)
      );
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
        await axios.delete(
          `https://63a8814df4962215b583b49f.mockapi.io/cart/${findItem.id}`
        );
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post(
          "https://63a8814df4962215b583b49f.mockapi.io/cart",
          obj
        );
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      alert("Ошибка при добавлении в корзину");
      console.error(error);
    }
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://63a8814df4962215b583b49f.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post(
          "https://63a8814df4962215b583b49f.mockapi.io/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в фавориты");
      console.error(error);
    }
  };

  const onRemoveFromCart = (id) => {
    try {
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(id))
      );
      axios.delete(`https://63a8814df4962215b583b49f.mockapi.io/cart/${id}`);
    } catch (error) {
      alert("Ошибка при удалении из корзины");
      console.error(error);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        onAddToFavorite,
        setCartOpened,
        setCartItems,
      }}
    >
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
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
              />
            </div>
          }
        ></Route>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
