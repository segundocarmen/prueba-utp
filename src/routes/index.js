import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Products from "../pages/products/products";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Products />} />
        <Route exact path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
};

export default App;
