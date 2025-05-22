import React, { useState } from "react";
import {
  SearchOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  CopyOutlined,
  UserOutlined,
  AreaChartOutlined,
  LogoutOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Input, Badge } from "antd";
import "./Header.css";
import MobileSidebar from "./MobileSidebar";

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
          <img src="/logo.png" alt="Logo" />
        </div>

        <div className="header__search">
          <Input
            size="large"
            placeholder="Hangi ürünü arıyorsunuz?"
            prefix={<SearchOutlined />}
            className="header__search-input"
          />
        </div>

        <nav className="header__nav">
          <a className="nav__item" href="#">
            <HomeOutlined />
            <span>Anasayfa</span>
          </a>
          <Badge count={5}>
            <a className="nav__item" href="#">
              <ShoppingCartOutlined />
              <span>Sepet</span>
            </a>
          </Badge>
          <a className="nav__item" href="#">
            <CopyOutlined />
            <span>Faturalar</span>
          </a>
          <a className="nav__item" href="#">
            <UserOutlined />
            <span>Müşteriler</span>
          </a>
          <a className="nav__item" href="#">
            <AreaChartOutlined />
            <span>Raporlar</span>
          </a>
          <a className="nav__item" href="#">
            <LogoutOutlined />
            <span>Çıkış</span>
          </a>
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
