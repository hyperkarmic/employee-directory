import React from "react";
import Header from "./components/Header.js";
import DataArea from "./components/DataArea.js";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div>
        <DataArea />
      </div>
    </div>
  );
};

export default App;
