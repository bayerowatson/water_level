import React from "react";

import { Route, Routes } from "react-router-dom";


import Navbar from "./components/Navbar";
import Levels from "./components/Levels";
import Subscribe from "./components/Subscribe";
import Unsubscribe from "./components/Unsubscribe";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Levels />} />
      <Route exact path="/subscribe" element={<Subscribe />} />
      <Route exact path="/unsubscribe" element={<Unsubscribe />} />
      {/* <Route path="/subscribe">
        <Subscribe />
      </Route>
      <Route path="/unsubscribe">
        <Unsubscribe />
      </Route> */}
      </Routes>
    </div>
  );
};

export default App;