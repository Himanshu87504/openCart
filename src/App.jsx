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
import SubscriptionPlanEdit from "./commponents/SutscriptionPlan/SubscriptionPlanEdit";
import Filter from "./commponents/Filters/Filters";
import Attributes from "./commponents/Attributes/Attributes";
import AttributesEdit from "./commponents/Attributes/AttributesEdit";
import AttributeGroup from "./commponents/Attributes/AttributeGroups";
import AttributesGroupEdit from "./commponents/Attributes/AttributesGroupEdit";
import OptionsEdit from "./commponents/Options/OptionsEdit";
import Options from "./commponents/Options/Options";
import EditManufacturer from "./commponents/Manufacturers/EditManufacturer";
import Manufacturers from "./commponents/Manufacturers/Manufacturers";
import Downloads from "./commponents/Downloads/Downloads";
import Review from "./commponents/Reviews/Review";
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
          <Route path="/Subscription-Plan" element={<SutscriptionPlan />} />
          <Route path="/Subscription/:id" element={<SubscriptionPlanEdit />} />
          {/* filters */}
          <Route path="/Filter" element={<Filter />} />
          {/* Attributes */}

          <Route path="/Attributes" element={<Attributes />} />
          <Route path="/AttributesEdit/:id" element={<AttributesEdit />} />

          <Route path="/Attributes-Groups" element={<AttributeGroup />} />
          <Route path="/AttributesGroupEdit/:id" element={<AttributesGroupEdit />} />

          {/* options */}

          <Route path="/Options" element={<Options />} />
          <Route path="/OptionsEdit/:id" element={<OptionsEdit />} />

          {/* Manufacturer */}

          <Route path="/Manufacturers" element={<Manufacturers />} />
          <Route path="/ManufacturersEdit/:id" element={<EditManufacturer />} />

          {/* Downloads */}

          <Route path="/Downloads" element={<Downloads />} />
          {/* Review */}

          <Route path="/Reviews" element={<Review />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
};

export default App;
