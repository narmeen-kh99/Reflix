import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import "../Header/HogwartNavbar.css";

const HogwartNavbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-link">
        <Link className="navbar-link" to="/">
          Home
        </Link>
      </div>
      <div className="navbar-link">
        <Link className="navbar-link" to="/catalog">
          Catalog
        </Link>
      </div>
      <div className="navbar-link1">REFLIX</div>
    </nav>
  );
};

export default HogwartNavbar;
