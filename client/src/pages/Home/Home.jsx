import React, { useEffect } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../features/category/categorySlice";
import {
  fetchAllProduct,
  fetchSearchProduct,
} from "../../features/product/productSlice";

function Home() {
  const dispatch = useDispatch();

  // Redux store'dan veriler alınıyor
  const categoryList = useSelector((state) => state.categories.categories);
  const queryProductList = useSelector((state) => state.product.queryProduct);
  const allProducts = useSelector((state) => state.product.allProducts);
  const searchProductList = useSelector((state) => state.product.searchProduct);
  // Sayfa ilk yüklendiğinde çalışacak işlemler
  useEffect(() => {
    dispatch(fetchCategories()); // Kategorileri getir
    dispatch(fetchAllProduct()); // Tüm ürünleri getir
    dispatch(fetchSearchProduct("")); // Arama kutusunu sıfırla (boş arama)
  }, [dispatch]);
  // Gösterilecek ürünler listesini belirle
  let productListToRender = allProducts;
  // Eğer arama yapıldıysa ve sonuç varsa, onları göster
  if (searchProductList && searchProductList.length > 0) {
    productListToRender = searchProductList;
    // Eğer kategori seçildiyse ve sonuç varsa, onları göster
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
              website_url={product.website_url}
              slug={product.slug}
              features={product.features}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
