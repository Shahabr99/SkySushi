import imgUrl from "../static/images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import "./Nav.css"

function Nav() {


    return (
        <nav className="navbar">
            <div className="logo-box">
                <a href="/"><img src={imgUrl} alt="" /></a>
                <p>Sky Sushi</p>
            </div>
            <div className="cart-container">
                <a className="shop-link" href="">Cart <FontAwesomeIcon icon={faCartShopping} /></a>
                <a className="shop-link" id="start-btn" href="">Start Here</a>
            </div>
            <div className="list-container">
                <ul>
                    <li><a className="nav-link" href="/">Home</a></li>
                    <li><a className="nav-link" href="/">About</a></li>
                    <li><a className="nav-link" href="/menu">Menu</a></li>
                    <li><a className="nav-link" href="/">Page</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav