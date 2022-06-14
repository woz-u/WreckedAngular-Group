import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav>
      <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/basicpackage">
        Users
      </NavLink>
      <NavLink activeClassName="active" to="/checkout">
        Contact
      </NavLink>
    </nav>
  );
}
export default Header;