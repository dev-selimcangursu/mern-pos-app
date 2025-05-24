import React, { useEffect } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import ProductCard from "../../components/ProductCard/ProductCard";
import Basket from "../../components/Basket/Basket";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../features/category/categorySlice";

function Home() {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categories.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    console.log("Category List:", categoryList);
  }, [categoryList]);
  return (
    <>
      <Header />
      <div className="home_main">
        <div className="categories__wrapper">
          <CategoryCard>
            <img
              style={{ width: 25, height: 25 }}
              src="https://cdn-icons-png.freepik.com/256/17883/17883534.png?ga=GA1.1.605070436.1748006589&semt=ais_hybrid"
              alt=""
            />
            <h4 style={{ marginTop: 10, fontSize: 16 }}>Tüm Ürünler</h4>
          </CategoryCard>
          {Array.isArray(categoryList) &&
            categoryList.map((category, index) => (
              <CategoryCard key={index}>
                <img
                  style={{ width: 25, height: 25 }}
                  src={category.icon}
                  alt={category.slug}
                />
                <h4 style={{ marginTop: 10, fontSize: 16 }}>{category.name}</h4>
              </CategoryCard>
            ))}
        </div>
        <div className="product__list__wrapper">
          <ProductCard
            image="https://cdn5.wikywatch.com.tr/uploads/2025/03/5s-pembe-1.jpg.webp"
            name="Wiky Watch 5 Plus"
            price={2390}
            stock={5}
            barcodeNo={3579001234567890}
          />
          <ProductCard
            image="https://cdn5.wikywatch.com.tr/uploads/2025/03/5s-pembe-1.jpg.webp"
            name="Wiky Watch 4"
            price={1990}
            stock={0}
            barcodeNo={3579001234567890}
          />
          <ProductCard
            image="https://cdn5.wikywatch.com.tr/uploads/2025/03/5s-pembe-1.jpg.webp"
            name="Wiky Watch 4"
            price={1990}
            stock={0}
            barcodeNo={3579001234567890}
          />
          <ProductCard
            image="https://cdn5.wikywatch.com.tr/uploads/2025/03/5s-pembe-1.jpg.webp"
            name="Wiky Watch 4"
            price={1990}
            stock={0}
            barcodeNo={3579001234567890}
          />

          <ProductCard
            image="https://cdn5.wikywatch.com.tr/uploads/2025/03/5s-pembe-1.jpg.webp"
            name="Wiky Watch 4"
            price={1990}
            stock={0}
            barcodeNo={3579001234567890}
          />

          <ProductCard
            image="https://cdn5.wikywatch.com.tr/uploads/2025/03/5s-pembe-1.jpg.webp"
            name="Wiky Watch 4"
            price={1990}
            stock={0}
            barcodeNo={3579001234567890}
          />
        </div>
        <div className="basket__wrapper">
          <Basket />
        </div>
      </div>
    </>
  );
}

export default Home;
