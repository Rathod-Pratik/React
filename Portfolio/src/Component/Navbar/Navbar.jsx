import React, { useEffect, useState } from "react";
import Button from "../Button";
import { Link } from "react-router-dom"; // Correct usage of Link
import { IoMdMenu } from "react-icons/io";
import styled from "styled-components";
import Aos from 'aos'
import 'aos/dist/aos.css'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the navbar
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
useEffect(()=>{
Aos.init();
})
  return (
    <Nav>
      <div className="center" data-aos='fade-top'>
        <h1 className="logo">Coder</h1>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <ul className={isOpen ? "open" : ""}>
            {" "}
            {/* Toggle based on isOpen */}
            <li className="nav-items">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-items">
              <Link to="/service">Service</Link>
            </li>
            <li className="nav-items">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-items">
              <Link to="/project">Project</Link>
            </li>
            <li className="nav-items">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="contact-btn">
          <Button text="Contact" />
        </div>

        {/* <div className="navbtn"> */}
        <IoMdMenu id="Navbtn" onClick={toggleNavbar} className="menu-icon" />
        {/* </div> */}
      </div>
    </Nav>
  );
};

export default Navbar;
const Nav = styled.nav`
  .center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 20px;
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 100;
    transition: all 1s ease-in;
    width: 100%;
  }
  /* Desktop styles */
  ul {
    display: flex;
    gap: 2rem;
    list-style: none;
  }

  .logo {
    font-size: 2.5rem;
    color: #3f396d;
    font-weight: bold;
  }

  .menu-icon {
    cursor: pointer;
    font-size: 2.5rem;
    display: none; /* Hidden on desktop */
  }

  .nav-links {
    display: flex;
    align-items: center;
    transition: all 0.5s ease-in-out;
  }

  .nav-items a {
    text-decoration: none;
    color: black;
    font-size: 1.125rem;
    position: relative;
  }

  .nav-items a::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 0;
    height: 3px;
    background-color: darkorange;
    transition: all 0.3s ease-in;
  }

  .nav-items a:hover::before {
    width: 100%;
    left: 0;
  }

  .nav-items a:hover {
    color: orange;
  }

  .contact-btn button {
    display: inline-block;
  }

  /* Mobile styles */
  @media (max-width: 850px) {
    .nav-links {
      position: absolute;
      text-align: center;
      left: 0;
      top: 100%;
      width: 100%;
      background-color: #fff;
      flex-direction: column;
      gap: 20px;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.5s ease-in-out;
    }

    .nav-links.open {
      max-height: 500px; /* Adjust this value based on your content height */
    }

    .menu-icon {
      display: block; /* Visible on mobile */
    }

    ul {
      display: flex;
      flex-direction: column;
    }

    .contact-btn button {
      display: none;
    }
  }
  @media only screen and (max-width: 350px){
    .center{
      padding: 8px 10px;
    }
    .logo{
      font-size: 2.2rem;
    }
  }
`;
