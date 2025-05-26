import React, { useEffect, useState } from "react";
import {
  HomeOutlined,
  UserOutlined,
  UnorderedListOutlined,
  SwapOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";
import "./MobileSidebar.css";
import "../Header/NavItem";
import NavItem from "../Header/NavItem";
import BadgeItem from "../BadgeItem";
function MobileSidebar({ isOpen, onClose }) {
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
  return (
    <>
      <div
        className={`mobile-sidebar__overlay ${isOpen ? "show" : ""}`}
        onClick={onClose}
      ></div>
      <div className={`mobile-sidebar ${isOpen ? "open" : ""}`}>
        <nav className="mobile-sidebar__nav">
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
      </div>
    </>
  );
}

export default MobileSidebar;
