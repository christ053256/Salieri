import React, { useState } from "react";
import { List, X } from "lucide-react";
import { Link } from "react-router-dom";  // Import Link
import "./pages_style/Navigation.css";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navigation-content">
      <div className="navigation">
        <h1 className="logo">Salieri</h1>

        {/* Mobile Menu Button (Always Clickable) */}
        <div className={`menu-icon ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
          {menuOpen ? <X size={30} /> : <List size={30} />}
        </div>

        {/* Navigation Menu */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {/* Use Link for navigation */}
          <li>
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to="/research" onClick={toggleMenu}>Research</Link>
          </li>
          <li>
            <Link to="/pricing" onClick={toggleMenu}>Pricing</Link>
          </li>
          <li>
            <Link to="/login" onClick={toggleMenu}>Try it now</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
