import React, { useState } from 'react'
import './Navbar.css';
import logo from "../../assets/logo.png"
import cart_icon from "../../assets/cart_icon.png"
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='logo' />
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => { setMenu("shop") }}><Link to="/" style={{textDecoration: 'none'}}>Shop</Link> {menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("men") }}><Link to="/men" style={{textDecoration: 'none'}}>Men's</Link>{menu === "men" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("women") }}><Link to="/women" style={{textDecoration: 'none'}}>Women's</Link>{menu === "women" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("kid") }}><Link to="/kid" style={{textDecoration: 'none'}}>childrens</Link>{menu === "kid" ? <hr /> : <></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to="/login">
        <button>Login</button>
        </Link>
        <Link to="/cart"><img src={cart_icon} alt='cart icon' /> </Link>
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  )
}

export default Navbar
