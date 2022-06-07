import styled from "styled-components";
import { Colors } from "../../utils/colors";
import device from "../../utils/mediaQuerySizes";

export const StyledButton = styled.div`
    padding: 0.8rem 2.8rem;
    font-size: 2rem;
    font-family: "Poppins", sans-serif;
    letter-spacing: 2px;
    border-radius: 4px;
    background-color: ${(props) =>
        props.disabled ? Colors.greyIcon : Colors.whiteSmoke};
    box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 10px, rgba(0, 0, 0, 0.22) 0px 2px 3px;
    color: ${(props) => (props.disabled ? Colors.whiteSmoke : Colors.orange)};
    width: max-content;
    height: max-content;
    cursor: pointer;
    &:active {
        transition: box-shadow 100ms ease-in-out;
        transform: scale(0.95);
        transition: transform 100ms ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 5px,
            rgba(0, 0, 0, 0.22) 0px 1px 2px;
    }
    pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
    opacity: ${(props) => (props.disabled ? 0.7 : 1)};
    @media ${device.tablet} {
        padding: 0.6rem 2.4rem;
        font-size: 1.5rem;
    }
    @media ${device.mobileM} {
        padding: 0.4rem 2rem;
        font-size: 1.2rem;
    }
`;
