import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">About Me
      </Link>
      <Link to="/portfolio" className="navbar-brand">Portfolio
      </Link>
      <Link to="/contact" className="navbar-brand">Contact
      </Link>
    </nav>
  );
}

export default Navbar;

