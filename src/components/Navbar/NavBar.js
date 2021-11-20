import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-list">
        <NavLink to="/" activeclassname="active">
          LIST
        </NavLink>
        <NavLink to="/add-item" activeclassname="active">
          ADD SHOP
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
