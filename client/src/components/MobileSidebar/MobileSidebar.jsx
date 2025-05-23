import React from "react";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  CopyOutlined,
  UserOutlined,
  AreaChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";
import "./MobileSidebar.css";
import "../Header/NavItem";
import NavItem from "../Header/NavItem";
import BadgeItem from "../BadgeItem";
function MobileSidebar({ isOpen, onClose }) {
  return (
    <>
      <div
        className={`mobile-sidebar__overlay ${isOpen ? "show" : ""}`}
        onClick={onClose}
      ></div>
      <div className={`mobile-sidebar ${isOpen ? "open" : ""}`}>
        <nav className="mobile-sidebar__nav">
          <NavItem className="nav__item">
            <HomeOutlined />
            <span>Anasayfa</span>
          </NavItem>

          <BadgeItem className="nav__badge" count="5">
            <a className="nav__item__link">
              <ShoppingCartOutlined />
              <span>Sepet</span>
            </a>
          </BadgeItem>

          <NavItem className="nav__item">
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
      </div>
    </>
  );
}

export default MobileSidebar;
