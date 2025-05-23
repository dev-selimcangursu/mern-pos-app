import React from "react";
import "./NavItem.css";

function NavItem({ children }) {
  return (
    <a className="nav__item" href="#">
      {children}
    </a>
  );
}

export default NavItem;
