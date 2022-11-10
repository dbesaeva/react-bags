function App() {
  return( 
  <div className="wrapper clear">
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">Корзина 
          <img className="cu-p" src="/img/btn-remove.svg" alt="Remove"/>
        </h2>

        <div className="items"> 
          <div className="cartItem d-flex align-center mb-20">
          <div style={{ backgroundImage: 'url(/img/bags/1.jpg)'}} className="cartItemImg"></div>
          <div className="mr-20 flex">
            <p className="mb-5">Сумка Shoulder Pouch</p>
            <b>6 990 руб.</b>
          </div>
          <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
          </div>
          <div className="cartItem d-flex align-center mb-20">
          <div style={{ backgroundImage: 'url(/img/bags/2.jpg)'}} className="cartItemImg"></div>
          <div className="mr-20 flex">
            <p className="mb-5">Сумка Super Amini Bella</p>
            <b>10 999 руб.</b>
          </div>
          <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>17 989 руб.</b>
            </li>
            <li>
              <span>Налог 4%:</span>
              <div></div>
              <b>946 руб.</b>
            </li>
          </ul>
          <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow"/></button>
        </div>
        
      </div>  
    </div>
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
      <img width={40} height={40} src="/img/logo.svg" />
      <div>
        <h3 className="text-uppercase">React Bags</h3>
        <p className="opacity-5">Магазин лучших сумок</p>
      </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30">
          <img width={23} height={23} src="/img/cart.svg" />
          <span>1205 руб.</span>
        </li>
        <li><img width={19} height={19} src="/img/user.svg" /></li>
      </ul>
    </header>
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Все сумки</h1>
        <div className="search-block d-flex">
        <img src="/img/search.svg" alt="Search"/>
        <input placeholder="Поиск..."/>
        </div>
      </div>
      <div className="d-flex">    

        <div className="card">
        <div className="favorite">
        <img src="/img/heart.svg" alt="Unliked"/>
        </div>
        <img className="image" width={129} height={198} src="/img/bags/1.jpg" alt="Bags"/>
        <h5>Сумка Shoulder Pouch</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>6 990 руб.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
          </button>
        </div>
        </div>
        <div className="card">
          <img className="image" width={129} height={198} src="/img/bags/2.jpg" alt="Bags"/>
          <h5>Сумка Super Amini Bella</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>10 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
            </button>
          </div>
        </div>
        <div className="card">
          <img className="image" width={129} height={198} src="/img/bags/3.jpg" alt="Bags"/>
          <h5>Сумка Loco из кожи аллигатора</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>14 100 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
            </button>
          </div>
        </div>
        <div className="card">
          <img className="image" width={129} height={198} src="/img/bags/4.jpg" alt="Bags"/>
          <h5>Сумка Prada Re-Edition 2005</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>25 650 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
  );
}

export default App;
