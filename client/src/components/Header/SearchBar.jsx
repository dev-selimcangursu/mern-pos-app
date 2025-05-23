import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import './SearchBar.css'

function SearchBar() {
  return (
    <Input
      size="large"
      placeholder="Hangi ürünü arıyorsunuz?"
      prefix={<SearchOutlined />}
      className="header__search-input"
    />
  );
}

export default SearchBar;
