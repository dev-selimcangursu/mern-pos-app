import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./SearchBar.css";
import { fetchSearchProduct } from "../../features/product/productSlice";
import { useDispatch } from "react-redux";

function SearchBar() {
  const dispatch = useDispatch();
  // Arama çubuğunda input değiştiğinde tetiklenen fonksiyon
  const getSearchProduct = (e) => {
    const searchValue = e.target.value;
    // Arama metnini Redux'a gönder, boş ise tüm ürünler için boş string gönder
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
