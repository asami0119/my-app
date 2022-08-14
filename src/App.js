import React from "react";
import Search from "./Search";
import Footer from "./Footer";
import Temperature from "./Temperature";

import "./App.css";

function App() {
  return (
    <div>
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <Search />
          <Temperature />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
