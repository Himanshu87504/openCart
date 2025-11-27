import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Dashboard from "./commponents/dashboard/Dashboard ";
import Footer from "./Footer";

const App = () => {
  const [hameburger, setHameburger] = useState(true); // sidebar state

  return (
    <Router>

      <Navbar hameburger={hameburger} setHameburger={setHameburger} />


      <div
        className={`transition-all duration-500 relative ${hameburger ? "ml-60" : "ml-0"
          }`}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
