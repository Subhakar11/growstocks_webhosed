import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
// Import additional components if needed
// import About from "./components/About";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter  basename="/dashboard">
      <Routes>
        <Route path="/*" element={<Home />} />
        {/* Define additional routes here */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
    document.getElementById('root')
  </React.StrictMode>
);
