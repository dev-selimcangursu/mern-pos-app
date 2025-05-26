import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  UnorderedListOutlined,
  SwapOutlined,
} from "@ant-design/icons";
import "../Header/Header.css";
import MobileSidebar from "../MobileSidebar/MobileSidebar";
import Logo from "../Header/Logo";
import SearchBar from "./SearchBar";
import NavItem from "./NavItem";
import BadgeItem from "../BadgeItem";

function Header() {
  const [mobileSidebarStatus, setMobileSidebarStatus] = useState(false);

  const basketCount = useSelector((state) => state.basket.basket.length);

  const [compareCount, setCompareCount] = useState(0);

  // 🔁 LocalStorage compareList'i dinle
  useEffect(() => {
    function updateCompareCount() {
      const list = JSON.parse(localStorage.getItem("compareList")) || [];
      setCompareCount(list.length);
    }

    updateCompareCount();

    // Custom event listener
    window.addEventListener("compareListUpdated", updateCompareCount);

    // Opsiyonel: storage event (başka tabdan güncelleme için)
    window.addEventListener("storage", updateCompareCount);

    return () => {
      window.removeEventListener("compareListUpdated", updateCompareCount);
      window.removeEventListener("storage", updateCompareCount);
    };
  }, []);

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
          <BadgeItem count={compareCount}>
            <NavItem to="/listem">
              <SwapOutlined />
              <span>Karşılaştır</span>
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
