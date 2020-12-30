import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        About Me
            </a>
      <a className="navbar-brand" href="/portfolio">
        Portfolio
            </a>
      <a className="navbar-brand" href="/contact">
        Contact
            </a>
    </nav>
  );
}

export default Navbar;

