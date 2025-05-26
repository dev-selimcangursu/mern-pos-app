import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./SearchBar.css";
import { fetchSearchProduct } from "../../features/product/productSlice";
import { useDispatch } from "react-redux";

function SearchBar() {
  const dispatch = useDispatch();

  const getSearchProduct = (e) => {
    const searchValue = e.target.value;
    dispatch(fetchSearchProduct(searchValue || ""));
  };

  return (
    <Input
      size="large"
      placeholder="Hangi ürünü arıyorsunuz?"
      onChange={getSearchProduct}
      prefix={<SearchOutlined />}
      className="header__search-input"
    />
  );
}

export default SearchBar;
