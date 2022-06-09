import React from "react";
import { NavLink } from "react-router-dom";
import { StyledNavbar } from "./StyledNavbar";
import { StyledNavbarItem } from "./StyledNavbarItem";
import { Colors } from "../../utils/colors.js";
import Logo from "../logo/Logo";
import LogOut from "../logOut/LogOut";

const Navbar = () => {
    return (
        <>
            <StyledNavbar>
                <StyledNavbarItem
                    color={
                        window.location.pathname === "/"
                            ? Colors.orange
                            : Colors.blackText
                    }
                >
                    <NavLink to="/">Home</NavLink>
                </StyledNavbarItem>
                <StyledNavbarItem
                    color={
                        window.location.pathname === "/playlists"
                            ? Colors.orange
                            : Colors.blackText
                    }
                >
                    <NavLink to="/playlists">Playlists</NavLink>
                </StyledNavbarItem>
                <StyledNavbarItem
                    color={
                        window.location.pathname === "/schedule"
                            ? Colors.orange
                            : Colors.blackText
                    }
                >
                    <NavLink to="/schedule">Schedule</NavLink>
                </StyledNavbarItem>
                <LogOut></LogOut>
            </StyledNavbar>
            <Logo></Logo>
        </>
    );
};

export default Navbar;
