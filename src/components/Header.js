import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header className="d-flex justify-between align-center p-40">
            <Link to="/">
                <div className="d-flex align-center">
                    <img width={40} height={40} src="/img/logo.svg" alt="Logotype"/>
                    <div>
                        <h3 className="text-uppercase">React Bags</h3>
                        <p className="opacity-5">Магазин лучших сумок</p>
                    </div>  
                </div>
            </Link>
            <ul className="d-flex">
            <li onClick={props.onClickCart} className="mr-30 cu-p">
                <img width={23} height={23} src="/img/cart.svg" alt="Cart" />
                <span>1205 руб.</span>
            </li>
            <li>
                <Link to="/favorites">
                    <img className="mr-30 cu-p" width={21} height={21} src="/img/favorite.svg" alt="Favorites" />
                </Link>
            </li>
            <li><img width={19} height={19} src="/img/user.svg" alt="User" /></li>
            </ul>
        </header>
    );
}

export default Header;