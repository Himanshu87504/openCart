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
import Startup from "./commponents/Extensions/Startup/Startup";
import StartupEdit from "./commponents/Extensions/Startup/StartupEdit";
import ThemeEditor from "./commponents/Design/Theme Editor/ThemeEditor";
import Layouts from "./commponents/Design/Layouts/Layouts";
import LanguageEditor from "./commponents/Design/Language Editor/LanguageEditor";
import Banner from "./commponents/Design/Banners/Banner";
import BannerEdit from "./commponents/Design/Banners/BannerEdit";
import SEOURL from "./commponents/Design/SEO-URL/SEOURL ";
import Orders from "./commponents/Sales/Orders/Orders";
import OrdersView from "./commponents/Sales/Orders/OrdersView";

import Subscriptions from "./commponents/Sales/Subscriptions/Subscriptions";
import Returns from "./commponents/Sales/Returns/Returns";
import ReturnEdit from "./commponents/Sales/Returns/ReturnEdit";
import Customers from "./commponents/Customer/Customers/Customers";
import CustomerEdit from "./commponents/Customer/Customers/Edit/CustomerEdit";
import CustomerGroups from "./commponents/Customer/Customer Groups/CustomerGroups";
import CustomerGroupsEdit from "./commponents/Customer/Customer Groups/CustomerGroupsEdit";

import CustomerApprovals from "./commponents/Customer/Customer Approvals/CustomerApprovals";
import GDPR from "./commponents/Customer/GDPR/GDPR";
import CustomFields from "./commponents/Customer/Custom Fields/CustomFields";
import CustomFieldsEdit from "./commponents/Customer/Custom Fields/CustomFieldsEdit";
import Affiliates from "./commponents/Marketing/Affiliates";
import Marketing from "./commponents/Marketing/Marketing";
import Coupons from "./commponents/Marketing/Coupons.jsx/Coupons";
import CouponEdit from "./commponents/Marketing/Coupons.jsx/Edit/CouponEdit";
import Mail from "./commponents/Marketing/Mail/Mail";
import Settings from "./commponents/Settings/Settings/Settings";
import SettingsEdit from "./commponents/Settings/Settings/Edit/SettingsEdit";
import User from "./commponents/Settings/Users/User";
import UserEdit from "./commponents/Settings/Users/UserEdit";

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
          <Route path="/Startup" element={<Startup />} />
          <Route path="/Startup/:id" element={<StartupEdit />} />

          <Route path="/Theme-Editor" element={<ThemeEditor />} />
          <Route path="/Layouts" element={<Layouts />} />
          <Route path="/Language-Editor" element={<LanguageEditor />} />

          <Route path="/Banners" element={<Banner />} />
          <Route path="/Banners/:id" element={< BannerEdit />} />

          <Route path="/SEO-URL" element={<SEOURL />} />

          <Route path="/Orders" element={<Orders />} />

          <Route path="/Ordersview/:id" element={<OrdersView />} />

          <Route path="/Subscriptions" element={<Subscriptions />} />
          <Route path="/Returns" element={<Returns />} />
          <Route path="/Returns/:id" element={<ReturnEdit />} />

          <Route path="/Customers" element={<Customers />} />
          <Route path="/Customers/:id" element={<CustomerEdit />} />
          <Route path="/Customer-Groups" element={<CustomerGroups />} />
          <Route path="/CustomerGroups/:id" element={<CustomerGroupsEdit />} />

          <Route path="/Customer-Approvals" element={<CustomerApprovals />} />
          <Route path="/GDPR" element={<GDPR />} />

          <Route path="/Custom-Fields" element={<CustomFields />} />

          <Route path="/CustomFields/:id" element={<CustomFieldsEdit />} />
          <Route path="/Affiliate" element={<Affiliates />} />

          <Route path="/Marketing" element={<Marketing />} />
          <Route path="/Coupons" element={<Coupons />} />
          <Route path="/Coupons/:id" element={<CouponEdit />} />
          <Route path="/Mail" element={<Mail />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Settings/:id" element={<SettingsEdit />} />
          <Route path="/User" element={<User />} />
          <Route path="/User/:id" element={<UserEdit />} />
        </Routes>
      </div>

      <Footer />
    </Router >
  );
};

export default App;
