import React from "react";

function Navbar() {
  return (
    <>
      <div className="navbar-hai">
        <img
          src="https://img.shop.com/Image/resources/logos/shop-logo-us-thanksgiving.svg"
          alt="shop.com"
        />
        <div>
          <input type="text" placeholder="searchProduct" />
          <button >Search</button>
        </div>
        <div className="sign">
          <div> <a href="#">Sign In</a> </div>
          <div> <a href="#">Order </a> </div>
          <div> <a href="#">Cart</a></div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
