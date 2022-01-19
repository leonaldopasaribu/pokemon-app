import React from "react";
import { BrowserRouter } from "react-router-dom";

import AllRoutes from "./routes";

import GlobalStyles from "./styles/";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AllRoutes />
        <GlobalStyles/>
      </div>
    </BrowserRouter>
  );
}

export default App;
