import React from "react";
import Header from "../../components/Header/Header";
import TableUI from '../../components/UI/Table';

function Basket() {
  const basketData = [
    {
      key: "1",
      image: "https://via.placeholder.com/50",
      name: "Ürün 1",
      category: "Elektronik",
      count: 2,
      price: "400₺",
    },
    {
      key: "2",
      image: "https://via.placeholder.com/50",
      name: "Ürün 2",
      category: "Giyim",
      count: 1,
      price: "150₺",
    },
  ];

  return (
    <>
      <Header />
      <div className="basket__main">
        <TableUI data={basketData} />
      </div>
    </>
  );
}

export default Basket;
