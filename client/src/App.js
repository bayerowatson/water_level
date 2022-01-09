import React from "react";

import { Route, Routes } from "react-router-dom";


import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Unsubscribe from "./components/Unsubscribe";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/unsubscribe" element={<Unsubscribe />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;