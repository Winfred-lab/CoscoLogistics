import React from "react";
import './Navbar.css';

const Navbar = () =>{
    return(
        <nav className="navbar">
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#network">Global Network</a></li>
                <li><a href="#exploring">Start Exploring</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;