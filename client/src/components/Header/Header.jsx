import React, { useState, useEffect } from "react";
import {
  HomeOutlined,
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
  // Mobil sidebar'ın açık mı kapalı mı olduğunu tutan state
  const [mobileSidebarStatus, setMobileSidebarStatus] = useState(false);
  // Karşılaştırma listesinde kaç ürün olduğunu tutan state
  const [compareCount, setCompareCount] = useState(0);

  // Karşılaştırma listesindeki ürün sayısını takip etmek için useEffect kullanımı
  useEffect(() => {
    // compareList değiştiğinde çağrılacak fonksiyon
    function updateCompareCount() {
      // LocalStorage'dan karşılaştırma listesini al, yoksa boş liste olarak ayarla
      const list = JSON.parse(localStorage.getItem("compareList")) || [];
      // Ürün sayısını state'e set et
      setCompareCount(list.length);
    }
    // Component mount olduğunda karşılaştırma sayısını hemen güncelle
    updateCompareCount();
    // compareList güncellendiğinde tetiklenen özel event dinleyicisi ekle
    window.addEventListener("compareListUpdated", updateCompareCount);
    // Başka sekmelerde localStorage güncellendiğinde de tetiklenen event dinleyicisi ekle
    window.addEventListener("storage", updateCompareCount);
    // Cleanup: component unmount olduğunda event listenerları kaldır
    return () => {
      window.removeEventListener("compareListUpdated", updateCompareCount);
      window.removeEventListener("storage", updateCompareCount);
    };
  }, []);
  // Mobil sidebar durumunu aç/kapa yapan fonksiyon
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
