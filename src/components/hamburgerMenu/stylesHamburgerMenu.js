import { Colors } from "../../utils/stylesConsts";

export const styles = {
    bmBurgerBars: {
        background: Colors.hamburgerMenuIcon,
    },
    bmCrossButton: {
        height: "2.4rem",
        width: "2.4rem",
    },
    bmMenuWrap: {
        position: "fixed",
        height: "100%",
        width: "23rem",
    },
    bmMenu: {
        backgroundImage: Colors.hamburgerMenuBg,
        background: Colors.whiteSmoke,
        padding: "2.5em 1.5em 0",
        fontSize: "1.15em",
    },
    bmItemList: {
        padding: "0.8em",
        gap: "1rem",
        display: "flex",
        flexDirection: "column",
    },
    bmItem: {
        display: "inline-block",
    },
};
