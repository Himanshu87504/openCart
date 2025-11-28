import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Dashboard from "./commponents/dashboard/Dashboard ";
import Categories from "./commponents/Catalog/Categories/Categories";
import EditCategories from "./commponents/Catalog/Categories/EditCategories";
import Footer from "./Footer";

const App = () => {
  const [hameburger, setHameburger] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Desktop (md and above)
        setHameburger(true);
      } else {
        // Mobile
        setHameburger(false);
      }
    };

    handleResize(); // Run on load
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

        </Routes>
      </div>

      <Footer />
    </Router>
  );
};

export default App;
