import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Dashboard from "./commponents/dashboard/Dashboard ";
import Categories from "./commponents/Catalog/Categories/Categories";
import EditCategories from "./commponents/Catalog/Categories/EditCategories";
import Product from "./commponents/Catalog/Product/Product";
import ProductsEdit from "./commponents/Catalog/Product/Tabs/ProductsEdit";
import SutscriptionPlan from "./commponents/SutscriptionPlan/SutscriptionPlan";
import Footer from "./Footer";

const App = () => {
  const [hameburger, setHameburger] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {

        setHameburger(true);
      } else {

        setHameburger(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>

      <Navbar hameburger={hameburger} setHameburger={setHameburger} />

      <div
        className={`transition-all duration-500 relative ${hameburger ? "ml-60" : "ml-0"
          }`}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />

          {/* {categories } */}
          <Route path="/Categories" element={<Categories />} />
          <Route path="/categories/edit/:id" element={<EditCategories />} />
          {/* products */}
          <Route path="/Products" element={<Product />} />
          <Route path="/products/edit/:id" element={<ProductsEdit />} />
          <Route path="/Sutscription-Plan" element={<SutscriptionPlan />} />

        </Routes>
      </div>

      <Footer />
    </Router>
  );
};

export default App;
