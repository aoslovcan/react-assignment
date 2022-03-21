import React, { useEffect } from "react";
import "./App.css";
import Routes from "./routes/Routes";
import HomePage from "./layouts/HomePage/HomePage";
import { BrowserRouter as Router } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Navigation from "./components/nav/Navigation";

library.add(faUser, faArrowLeft);

function App() {
  return (
    <Router>
      <Navigation title="Daily blog" />
      <Routes />
    </Router>
  );
}
export default App;
