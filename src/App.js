function App() {
  return( 
  <div className="wrapper clear">
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
      <img width={40} height={40} src="/img/logo.svg" />
      <div>
        <h3 className="text-uppercase">React Bags</h3>
        <p>Магазин лучших сумок</p>
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
    <div>
      {/* <h1 className="content">Все сумки</h1> */}
    </div>
  </div>
  );
}

export default App;
