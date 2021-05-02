import React from 'react';

const Navbar = (props) => {
    return (
      <div className="navbar">
        <div className="name">Cart</div>
        <div className="cart-icon-container">
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/711/711897.svg?token=exp=1619951957~hmac=e75244961855be9fc15796565ac67ad7"
            alt="carticon"
            className="cart-icon"
          />
          <span className="cart-count">3</span>
        </div>
      </div>
    );
};

export default Navbar;