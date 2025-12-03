import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Dashboard from "./commponents/dashboard/Dashboard ";
import Categories from "./commponents/Catalog/Categories/Categories";
import EditCategories from "./commponents/Catalog/Categories/EditCategories";
import Product from "./commponents/Catalog/Product/Product";
import ProductsEdit from "./commponents/Catalog/Product/Tabs/ProductsEdit";
import SubscriptionPlan from "./commponents/Catalog/SutscriptionPlan/SutscriptionPlan";
import Footer from "./Footer";
import SubscriptionPlanEdit from "./commponents/Catalog/SutscriptionPlan/SubscriptionPlanEdit";
import Filter from "./commponents/Catalog/Filters/Filters";
import Attributes from "./commponents/Catalog/Attributes/Attributes";
import AttributesEdit from "./commponents/Catalog/Attributes/AttributesEdit";
import AttributeGroup from "./commponents/Catalog/Attributes/AttributeGroups";
import AttributesGroupEdit from "./commponents/Catalog/Attributes/AttributesGroupEdit";
import OptionsEdit from "./commponents/Catalog/Options/OptionsEdit";
import Options from "./commponents/Catalog/Options/Options";
import EditManufacturer from "./commponents/Catalog/Manufacturers/EditManufacturer";
import Manufacturers from "./commponents/Catalog/Manufacturers/Manufacturers";
import Downloads from "./commponents/Catalog/Downloads/Downloads";
import Review from "./commponents/Catalog/Reviews/Review";
import Information from "./commponents/Catalog/Information/Information";
import InformationEdit from "./commponents/Catalog/Information/InformationEdit";

import Marketplace from "./commponents/Extensions/Marketplace/Marketplace";
import Installer from "./commponents/Extensions/Installer/Installer";
import Extension from "./commponents/Extensions/Extensions/Extensions";
import EventList from "./commponents/Extensions/Events/Events";
import Cron from "./commponents/Extensions/Cron Jobs/Cron";


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
          <Route path="/Subscription-Plan" element={<SubscriptionPlan />} />
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

          <Route path="/Information" element={<Information />} />

          <Route path="/InformationEdit/:id" element={<InformationEdit />} />

          {/*----------------------------------------------------------------------------------------------------------------------  */}

          <Route path="/Marketplace" element={<Marketplace />} />
          <Route path="/Installer" element={<Installer />} />
          <Route path="/Extensions" element={<Extension />} />
          <Route path="/Events" element={<EventList />} />
          <Route path="/Cron-Jobs" element={<Cron />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
};

export default App;
