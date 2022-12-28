import Card from "../components/Card";

export function Home({
  items,
  cartItems,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
}) {
  return (
    <div className="content">
      <div className="search">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
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
              onPlus={() => onAddToCart(item)}
              onFavorite={() => onAddToFavorite(item)}
              added={cartItems.some(
                (obj) => Number(obj.id) === Number(item.id)
              )}
              loading={false}
              key={index}
              {...item}
            />
          ))}
      </div>
    </div>
  );
}
