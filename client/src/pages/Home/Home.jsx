import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import ProductCard from "../../components/ProductCard/ProductCard";
import Basket from "../../components/Basket/Basket";
import { MdOutlineBorderAll } from "react-icons/md";
import { BsWatch } from "react-icons/bs";
import { GiGymBag } from "react-icons/gi";
import { FaGlassWaterDroplet } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import { IoShareSocialSharp } from "react-icons/io5";
import { TiTags } from "react-icons/ti";

function Home() {
  const items = [
    {
      name: "Kırmızı Tişört",
      price: 199.99,
      quantity: 2,
      image:
        "https://cdn5.wikywatch.com.tr/uploads/2025/01/wikywatch5e-pembe-1.jpg.webp",
    },
    {
      name: "Mavi Kot Pantolon",
      price: 349.99,
      quantity: 1,
      image:
        "https://cdn3.wikywatch.com.tr/uploads/2025/01/wikywatch5e-mavi-1.jpg.webp",
    },
  ];
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
          <CategoryCard>
            <img
              style={{ width: 25, height: 25 }}
              src="https://cdn-icons-png.freepik.com/256/18391/18391978.png?ga=GA1.1.605070436.1748006589&semt=ais_hybrid"
              alt=""
            />
            <h4 style={{ marginTop: 10, fontSize: 16 }}>Wiky Tags</h4>
          </CategoryCard>
          <CategoryCard>
            <img
              style={{ width: 25, height: 25 }}
              src="https://cdn-icons-png.freepik.com/256/6752/6752654.png?ga=GA1.1.605070436.1748006589&semt=ais_hybrid"
              alt=""
            />
            <h4 style={{ marginTop: 10, fontSize: 16 }}>Wiky Watch</h4>
          </CategoryCard>
          <CategoryCard>
            <img
              style={{ width: 25, height: 25 }}
              src="https://cdn-icons-png.freepik.com/256/6698/6698603.png?ga=GA1.1.605070436.1748006589&semt=ais_hybrid"
              alt=""
            />
            <h4 style={{ marginTop: 10, fontSize: 16 }}>Saat Aksesuarları</h4>
          </CategoryCard>
          <CategoryCard>
            <img
              style={{ width: 25, height: 25 }}
              src="https://cdn-icons-png.freepik.com/256/7273/7273060.png?ga=GA1.1.605070436.1748006589&semt=ais_hybrid"
              alt=""
            />
            <h4 style={{ marginTop: 10, fontSize: 16 }}>Çantalar</h4>
          </CategoryCard>
          <CategoryCard>
            <img
              style={{ width: 25, height: 25 }}
              src="https://cdn-icons-png.freepik.com/256/883/883327.png?ga=GA1.1.605070436.1748006589&semt=ais_hybrid"
              alt=""
            />
            <h4 style={{ marginTop: 10, fontSize: 16 }}>Suluk ve Matara</h4>
          </CategoryCard>

          <CategoryCard>
            <img
              style={{ width: 25, height: 25 }}
              src="https://cdn-icons-png.freepik.com/256/18572/18572805.png?ga=GA1.1.605070436.1748006589&semt=ais_hybrid"
              alt=""
            />
            <h4 style={{ marginTop: 10, fontSize: 16 }}>Pazaryerleri</h4>
          </CategoryCard>
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
          <Basket items={items} />
        </div>
      </div>
    </>
  );
}

export default Home;
