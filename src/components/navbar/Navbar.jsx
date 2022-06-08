import React from "react";
import { NavLink } from "react-router-dom";
import { StyledNavbar } from "./StyledNavbar";
import { StyledNavbarItem } from "./StyledNavbarItem";

const Navbar = () => {
    return (
        <StyledNavbar>
            <StyledNavbarItem>
                <NavLink to="/">Home</NavLink>
            </StyledNavbarItem>
            <StyledNavbarItem>
                <NavLink to="/schedule">Schedule</NavLink>
            </StyledNavbarItem>
            <StyledNavbarItem>
                <NavLink to="/playlists">Playlists</NavLink>
            </StyledNavbarItem>
            {/* <StyledNavbarItem>
                <NavLink to="/statistics">Statistics</NavLink>
            </StyledNavbarItem> */}
        </StyledNavbar>
    );
};

export default Navbar;
