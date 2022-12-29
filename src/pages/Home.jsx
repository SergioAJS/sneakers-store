import Card from "../components/Card";

export function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  isLoading,
}) {
  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
      <Card
        onPlus={() => onAddToCart(item)}
        onFavorite={() => onAddToFavorite(item)}
        loading={isLoading}
        key={index}
        {...item}
      />
    ));
  };
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

      <div className="cards">{renderItems()}</div>
    </div>
  );
}
