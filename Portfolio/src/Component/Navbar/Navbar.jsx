import React, { useState } from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">Pratik</h1>
      <div className="nav-links">
        <ul className={menuOpen ? "open" : ""}>
          <li className="nav-item" selected>
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/service">Service</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/project">Project</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="contact-btn">
        <Button text="Contact" />
      </div>
        <IoMdMenu
          id="Navbtn"
          onClick={() => setMenuOpen(!menuOpen)}
          className="menu-icon"
        />
    </nav>
  );
};

export default Navbar;

