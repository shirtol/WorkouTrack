import React from "react";
import { NavLink } from "react-router-dom";
import { StyledNavbarItem } from "../navbar/StyledNavbarItem";
import { StyledBurger } from "./StyledBurger";
import "./hamburgerMenu.css";
import { Colors } from "../../utils/colors";
import LogOut from "../logOut/LogOut";

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

                <LogOut></LogOut>
            </StyledBurger>
        </>
    );
};

export default HamburgerMenu;

const styles = {
    bmBurgerBars: {
        background: "#373a47",
    },
    bmBurgerBarsHover: {
        background: "#a90000",
    },
    bmCrossButton: {
        height: "24px",
        width: "24px",
    },
    bmCross: {
        background: "#bdc3c7",
    },
    bmMenuWrap: {
        position: "fixed",
        height: "100%",
        width: "23rem",
    },
    bmMenu: {
        backgroundImage: "linear-gradient(315deg, #d5d5d5 0%, #e9e9e9 74%)",
        background: Colors.whiteSmoke,
        padding: "2.5em 1.5em 0",
        fontSize: "1.15em",
    },
    bmMorphShape: {
        fill: "#373a47",
    },
    bmItemList: {
        color: "#b8b7ad",
        padding: "0.8em",
        gap: "1rem",
        display: "flex",
        flexDirection: "column",
    },
    bmItem: {
        display: "inline-block",
    },
    bmOverlay: {
        background: "rgba(0, 0, 0, 0.3)",
    },
};
