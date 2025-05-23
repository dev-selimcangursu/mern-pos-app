import React, { useState } from "react";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  CopyOutlined,
  UserOutlined,
  AreaChartOutlined,
  LogoutOutlined,
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
          <NavItem>
            <HomeOutlined />
            <span>Anasayfa</span>
          </NavItem>
          <BadgeItem count="5">
            <a className="nav__item" href="#">
              <ShoppingCartOutlined />
              <span>Sepet</span>
            </a>
          </BadgeItem>
          <NavItem>
            <CopyOutlined />
            <span>Faturalar</span>
          </NavItem>
          <NavItem>
            <UserOutlined />
            <span>Müşteriler</span>
          </NavItem>
          <NavItem>
            <AreaChartOutlined />
            <span>Raporlar</span>
          </NavItem>
          <NavItem>
            <LogoutOutlined />
            <span>Çıkış</span>
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
