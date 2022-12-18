import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";

const arr = [
  {
    name: "Мужские кроссовки Nike Blazer",
    price: 12999,
    imageUrl: "/img/sneakers/1.jpg",
  },
  {
    name: "Мужские кроссовки Reebok",
    price: 13300,
    imageUrl: "/img/sneakers/2.jpg",
  },
  {
    name: "Мужские кроссовки Nike Air",
    price: 12699,
    imageUrl: "/img/sneakers/3.jpg",
  },
];

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />

      <div className="content">
        <div className="search">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск" type="text" />
          </div>
        </div>

        <div className="cards">
          {arr.map((obj, index) => (
            <Card
              title={obj.name}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onClick={() => console.log(obj)}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
