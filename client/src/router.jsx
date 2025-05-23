import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Basket from "./pages/Basket/Basket";
import Invoice from "./pages/Invoice/Invoice";
import Customer from "./pages/Customer/Customer";
import Report from "./pages/Reports/Report";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Account from "./pages/Auth/Account";

function router() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sepet" element={<Basket />} />
          <Route path="/faturalar" element={<Invoice />} />
          <Route path="/musteriler" element={<Customer />} />
          <Route path="/raporlar" element={<Report />} />
          <Route path="/giris-yap" element={<Login />} />
          <Route path="/kayit-ol" element={<Register />} />
          <Route path="/hesabim" element={<Account />} />
        </Routes>
      </Router>
    </>
  );
}

export default router;
