import imgUrl from "/images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {faBars, faXmark, faBookOpen, faUtensils, faHouse} from '@fortawesome/free-solid-svg-icons' 
import "./Nav.css"
import { useState } from "react";

function Nav() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    function handleClick() {
        setMenuOpen(!menuOpen)
    }

    return (
        <nav className="navbar">
            <div className="logo-box">
                <a href="/"><img src={imgUrl} alt="" /></a>
                <p>Sky Sushi</p>
            </div>
            <div className={`list-container ${menuOpen ? 'open':'close'}`}>
                <ul>
                    <li><FontAwesomeIcon className="icons" icon={faHouse} /> <a className="nav-link" href="/">Home</a></li>
                    <li><FontAwesomeIcon className="icons" icon={faUtensils} /><a className="nav-link" href="/about"> About</a></li>
                    <li><FontAwesomeIcon className="icons" icon={faBookOpen} /> <a className="nav-link" href="/menu">Menu</a></li>
                    <li><FontAwesomeIcon className="icons" icon={faCartShopping} /><a className="nav-link" href="/">Orders</a></li>
                </ul>
            </div>
            <div className="cart-container">
                <a className="shop-link" href="">Cart <FontAwesomeIcon icon={faCartShopping} /></a>
                <a className="shop-link" id="start-btn" href="">Start Here</a>
            </div>
            <div className="menu-btn">
                <FontAwesomeIcon className={`hambur ${menuOpen ? 'close':'open'}`} icon={faBars} size="2xl" onClick={handleClick} />
                <FontAwesomeIcon className={`x-btn ${menuOpen ? 'open':'close'}`} icon={faXmark} size="2xl" onClick={handleClick} />
            </div>
        </nav>
    );
}

export default Nav