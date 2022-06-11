import React from "react";
import { NavLink } from "react-router-dom";
import { StyledNavbarItem } from "../navbar/StyledNavbarItem";
import { StyledBurger } from "./StyledBurger";
import "./hamburgerMenu.css";
import { Colors } from "../../utils/colors";
import LogOut from "../logOut/LogOut";
import { styles } from "./stylesHamburgerMenu";

const HamburgerMenu = () => {
    return (
        <>
            <StyledBurger styles={styles}>
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
                <StyledNavbarItem
                    color={
                        window.location.pathname === "/contact"
                            ? Colors.orange
                            : Colors.blackText
                    }
                >
                    <NavLink to="/contact">Contact</NavLink>
                </StyledNavbarItem>

                <LogOut></LogOut>
            </StyledBurger>
        </>
    );
};

export default HamburgerMenu;
