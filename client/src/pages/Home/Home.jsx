import React, { useEffect } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import ProductCard from "../../components/ProductCard/ProductCard";
import Basket from "../../components/Basket/Basket";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../features/category/categorySlice";
import {
  fetchAllProduct,
  fetchSearchProduct,
} from "../../features/product/productSlice";

function Home() {
  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.categories.categories);
  const queryProductList = useSelector((state) => state.product.queryProduct);
  const allProducts = useSelector((state) => state.product.allProducts);
  const searchProductList = useSelector((state) => state.product.searchProduct);
  console.log("Arama Sonuçları:", searchProductList);
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchAllProduct());
    dispatch(fetchSearchProduct(""));
  }, [dispatch]);

  let productListToRender = allProducts;

  if (searchProductList && searchProductList.length > 0) {
    productListToRender = searchProductList;
  } else if (queryProductList && queryProductList.length > 0) {
    productListToRender = queryProductList;
  }

  return (
    <>
      <Header />
      <div className="home_main">
        <div className="categories__wrapper">
          {Array.isArray(categoryList) &&
            categoryList.map((category) => (
              <CategoryCard
                id={category._id}
                icon={category.icon}
                name={category.name}
                slug={category.slug}
                key={category._id}
              />
            ))}
        </div>

        <div className="product__list__wrapper">
          {productListToRender.map((product) => (
            <ProductCard
              id={product._id}
              key={product._id}
              image={product.image_name}
              name={product.name}
              price={product.price}
              discountPrice={product.discount_price}
              description={product.short_description}
              stock={product.stock}
              barcodeNo={product.stk}
            />
          ))}
        </div>

        <div className="basket__wrapper">
          <Basket />
        </div>
      </div>
    </>
  );
}

export default Home;
