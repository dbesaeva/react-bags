import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://63737c01348e9472990db5c5.mockapi.io/items')
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setItems(json);
    });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  return( 
  <div className="wrapper clear">
    {cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(false)}/> : null}
    <Header onClickCart={() => setCartOpened(true)} />
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все сумки"}</h1>
        <div className="search-block d-flex">
        <img src="/img/search.svg" alt="Search"/>
        {searchValue && (
          <img
            onClick={() => setSearchValue('')}
            className="clear cu-p"
            src="img/btn-remove.svg"
            alt="Clear"
          />
        )}
        <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."/>
        </div>
      </div>

      <div className="d-flex flex-wrap"> 
        {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item) => (
          <Card 
            key={item.title}
            title={item.title} 
            price={item.price} 
            imageUrl={item.imageUrl}
            onFavorite={() => console.log(item)}
            onPlus={(obj) => onAddToCart(obj)} /> 
        ))}
      </div>
    </div>
  </div>
  );
}

export default App;