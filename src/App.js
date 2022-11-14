import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  {title: 'Сумка Shoulder Pouch', price: 6990, imageUrl: "/img/bags/1.jpg"},
  {title: 'Сумка Moonbag small', price: 10999, imageUrl: "/img/bags/2.jpg"},
  {title: 'Сумка Pocket Bag mini', price: 12800, imageUrl: "/img/bags/3.jpg"},
];

function App() {
  return( 
  <div className="wrapper clear">
    <Drawer />
    <Header />
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Все сумки</h1>
        <div className="search-block d-flex">
        <img src="/img/search.svg" alt="Search"/>
        <input placeholder="Поиск..."/>
        </div>
      </div>

      <div className="d-flex"> 
        {arr.map((obj) => (
          <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl} /> 
        ))}
      </div>
    </div>
  </div>
  );
}

export default App;
