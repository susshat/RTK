import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./DwNavLink.css";

const DwNavLink = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((current) => !current);

  return (
    <nav className="dw-navbar">
      <div className="dw-navbar__brand">
        <span className="dw-navbar__logo">MySite</span>
      </div>

      <button
        className={`dw-navbar__toggle ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-expanded={menuOpen}
        aria-label="Toggle navigation"
      >
        <span className="dw-navbar__hamburger"></span>
      </button>

      <div className={`dw-navbar__links ${menuOpen ? "dw-navbar__links--open" : ""}`}>
        <NavLink to="/" end onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/product" end onClick={() => setMenuOpen(false)}>
          Product
        </NavLink>
        <NavLink to="/product/create" onClick={() => setMenuOpen(false)}>
        Create Product
        </NavLink>
        <NavLink to="/user" end onClick={() => setMenuOpen(false)}>
          User
        </NavLink>
        <NavLink to="/user/create" onClick={() => setMenuOpen(false)}>
        Create User
        </NavLink>
        <NavLink to="review" onClick={() => setMenuOpen(false)}>
          Review
        </NavLink>
        <NavLink to="/review/create" onClick={() => setMenuOpen(false)}>
        Create Review
        </NavLink>
      </div>
    </nav>
  );
};

export default DwNavLink;
