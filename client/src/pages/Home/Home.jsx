import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import ProductCard from "../../components/ProductCard/ProductCard";
import { MdOutlineBorderAll } from "react-icons/md";
import { BsWatch } from "react-icons/bs";
import { GiGymBag } from "react-icons/gi";
import { FaGlassWaterDroplet } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import { IoShareSocialSharp } from "react-icons/io5";
import { TiTags } from "react-icons/ti";

function Home() {
  return (
    <>
      <Header />
      <div className="home_main">
        <div className="categories__wrapper">
          <CategoryCard>
            <MdOutlineBorderAll style={{ width: 25, height: 25 }} />
            <h4 style={{ marginTop: 10, fontSize: 16 }}>Tüm Ürünler</h4>
          </CategoryCard>
          <CategoryCard>
            <TiTags style={{ width: 25, height: 25 }} />
            <h4 style={{ marginTop: 10, fontSize: 16 }}>Wiky Tags</h4>
          </CategoryCard>
          <CategoryCard>
            <BsWatch style={{ width: 25, height: 25 }} />
            <h4 style={{ marginTop: 10, fontSize: 16 }}>Wiky Watch</h4>
          </CategoryCard>
          <CategoryCard>
            <AiFillProduct style={{ width: 25, height: 25 }} />
            <h4 style={{ marginTop: 10, fontSize: 16 }}>Saat Aksesuarları</h4>
          </CategoryCard>
          <CategoryCard>
            <GiGymBag style={{ width: 25, height: 25 }} />
            <h4 style={{ marginTop: 10, fontSize: 16 }}>Çantalar</h4>
          </CategoryCard>
          <CategoryCard>
            <FaGlassWaterDroplet style={{ width: 25, height: 25 }} />
            <h4 style={{ marginTop: 10, fontSize: 16 }}>Suluk ve Matara</h4>
          </CategoryCard>

          <CategoryCard>
            <IoShareSocialSharp style={{ width: 25, height: 25 }} />
            <h4 style={{ marginTop: 10, fontSize: 16 }}>Pazaryerleri</h4>
          </CategoryCard>
        </div>
        <div className="product__list__wrapper">
          <ProductCard />
        </div>
        <div className="basket__wrapper">basket</div>
      </div>
    </>
  );
}

export default Home;
