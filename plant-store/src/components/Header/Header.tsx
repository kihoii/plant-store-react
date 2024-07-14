import './Header.scss';
import logo from '../assets/logo.png';
import cart from '../assets/cart.svg';
import menu from '../assets/burger-menu.svg'

export const Header = () => {
    return (
        <nav className="nav-main">
            <div className="nav-left">
                <img src={logo} alt='logo' />
            </div>
            <div className="nav-right">
                <a href="./index.html" className="nav-link mobile-hide">Home</a>
                <a href="" className="nav-link mobile-hide">Plants</a>
                <a href="" className="nav-link mobile-hide">About</a>
                <a href="" className="nav-link mobile-hide">Contact</a>
                <a href="" className="nav-link cart"><img src={cart} alt="Cart" /></a>
                <a href="" className="nav-link burger"><img src={menu} alt="Menu" /></a>
            </div>
        </nav>
    )
}
