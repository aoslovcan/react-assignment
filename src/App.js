import React, { useEffect } from "react";
import "./App.css";
import Routes from "./routes/Routes";
import HomePage from "./layouts/HomePage/HomePage";
import { BrowserRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";

library.add(faUser);

function App() {
  return (
    <BrowserRouter>
      Replace later
      <Routes />
    </BrowserRouter>
  );
}
export default App;
