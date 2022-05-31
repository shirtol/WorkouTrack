import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <header className="navbar">
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/schedule">Schedule</NavLink>
            </li>
            <li>
                <NavLink to="/playlists">Playlists</NavLink>
            </li>
            <li>
                <NavLink to="/statistics">Statistics</NavLink>
            </li>
        </header>
    );
};

export default Navbar;
