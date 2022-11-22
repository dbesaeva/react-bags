import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://63737c01348e9472990db5c5.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://63737c01348e9472990db5c5.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://63737c01348e9472990db5c5.mockapi.io/cart', obj);
    setCartItems(prev => [...prev, obj]);
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://63737c01348e9472990db5c5.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
  }

  const onAddToFavorite = (obj) => {
    axios.post('https://63737c01348e9472990db5c5.mockapi.io/favorites', obj);
    setFavorites(prev => [...prev, obj]);
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  return( 
  <div className="wrapper clear">
    {cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} /> : null}
    <Header onClickCart={() => setCartOpened(true)} />

    <Routes>
      <Route exact path="/" element={<Home />}></Route>
    </Routes>
  </div>
  );
}

export default App;