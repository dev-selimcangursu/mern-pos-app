import React, { useState } from "react";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import "../Header/Header.css";
import MobileSidebar from "../MobileSidebar/MobileSidebar";
import Logo from "../Header/Logo";
import SearchBar from "./SearchBar";
import NavItem from "./NavItem";
import BadgeItem from "../BadgeItem";

function Header() {
  const [mobileSidebarStatus, setMobileSidebarStatus] = useState(false);

  function toggleSidebar() {
    setMobileSidebarStatus(!mobileSidebarStatus);
  }

  return (
    <>
      {mobileSidebarStatus && (
        <MobileSidebar
          isOpen={mobileSidebarStatus}
          onClose={() => setMobileSidebarStatus(false)}
        />
      )}
      <header className="header">
        <div className="header__logo">
          <Logo id="headerLogo" />
        </div>

        <div className="header__search">
          <SearchBar />
        </div>

        <nav className="header__nav">
          <NavItem to="/">
            <HomeOutlined />
            <span>Anasayfa</span>
          </NavItem>
       
          <BadgeItem count="5">
            <NavItem to="/listem">
              <ShoppingCartOutlined />
              <span>Listem</span>
            </NavItem>
          </BadgeItem>

          <NavItem to="https://www.wikywatch.com.tr">
            <UserOutlined />
            <span>Websitemiz</span>
          </NavItem>
        </nav>

        <UnorderedListOutlined
          onClick={toggleSidebar}
          id="mobile__sidebar__open__button"
        />
      </header>
    </>
  );
}

export default Header;
