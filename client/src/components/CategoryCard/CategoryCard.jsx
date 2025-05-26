import React from "react";
import "./CategoryCard.css";
import { useDispatch } from "react-redux";
import {
  fetchQueryProduct,
  clearSearchProduct,
} from "../../features/product/productSlice";

function CategoryCard({ name, icon, slug, id }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (id) {
      dispatch(fetchQueryProduct(id));
      dispatch(clearSearchProduct());
    } else {
      console.error("Kategori ID eksik!");
    }
  };

  return (
    <div className="category__card" onClick={handleClick}>
      <img style={{ width: 25, height: 25 }} src={icon} alt={slug} />
      <h4 style={{ marginTop: 10, fontSize: 16 }}>{name}</h4>
    </div>
  );
}

export default CategoryCard;
