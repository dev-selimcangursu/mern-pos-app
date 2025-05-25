import React from "react";
import { Link } from "react-router-dom";
import "./NavItem.css";

function NavItem({ to, children }) {
  return (
    <Link className="nav__item" to={to}>
      {children}
    </Link>
  );
}

export default NavItem;
