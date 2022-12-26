import Card from "../components/Card";

export function Favorites({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
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
              favorited={true}
              // onPlus={() => onAddToCart(item)}
              onFavorite={() => onAddToFavorite(item)}
              key={index}
              {...item}
            />
          ))}
      </div>
    </div>
  );
}
