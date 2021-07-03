import logo from "../assets/the-coffee-house-logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = ({ cart }) => {
  const [open, setOpen] = useState(false);

  const cartItems = cart.reduce((acc, { qty }) => acc + qty, 0);

  return (
    <header className="header">
      <Link to="/" replace>
        <div className="header__logo">
          <img src={logo} alt="Logo" />
        </div>
      </Link>
      <nav className="header__nav">
        <ul className="header__nav-links">
          <li>
            <Link to="/" replace>
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" replace>
              Shop
            </Link>
          </li>
        </ul>
      </nav>
      <Link to="/cart" replace>
        <div className="header__cart">
          <FaShoppingCart />
          <span className="header__cart-items">({cartItems})</span>
        </div>
      </Link>

      <div className="header__hamburger" onClick={() => setOpen(!open)}>
        {open ? <GrClose /> : <GiHamburgerMenu />}
      </div>

      <div className={`header__mobile-links ${open ? "" : "hide"}`}>
        <Link to="/" replace onClick={() => setOpen(!open)}>
          Home
        </Link>
        <br />
        <Link to="/shop" replace onClick={() => setOpen(!open)}>
          Shop
        </Link>
        <br />
        <Link to="/cart" replace onClick={() => setOpen(!open)}>
          Cart ({cartItems})
        </Link>
      </div>
    </header>
  );
};

export default Header;
