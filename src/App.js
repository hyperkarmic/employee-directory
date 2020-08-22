import React from "react";
import Header from "./components/Header.js";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header
        title="Employee Directory"
        subtitle="Click on search bar to to search for a user"
      />
    </div>
  );
};

export default App;
