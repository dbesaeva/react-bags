function App() {
  return( 
  <div className="wrapper clear">
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
      <h1 className="mb-40">Все сумки</h1>
      <div className="d-flex">    

        <div className="card">
        <img wigth={129} height={198} src="/img/bags/1.jpg" alt="Bags"/>
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
        <img wigth={129} height={198} src="/img/bags/2.jpg" alt="Bags"/>
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
        <img wigth={129} height={198} src="/img/bags/3.jpg" alt="Bags"/>
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
        <img wigth={129} height={198} src="/img/bags/4.jpg" alt="Bags"/>
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
