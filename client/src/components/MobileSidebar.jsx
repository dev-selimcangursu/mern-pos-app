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

function MobileSidebar({ isOpen, onClose }) {
  return (
    <>
      <div
        className={`mobile-sidebar__overlay ${isOpen ? "show" : ""}`}
        onClick={onClose}
      ></div>
      <div className={`mobile-sidebar ${isOpen ? "open" : ""}`}>
        <nav className="mobile-sidebar__nav">
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
      </div>
    </>
  );
}

export default MobileSidebar;
