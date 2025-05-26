import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Basket from "./pages/Basket/Basket";


function router() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listem" element={<Basket />} />
        </Routes>
      </Router>
    </>
  );
}

export default router;
