import styled from "styled-components";
import { slide as Menu } from "react-burger-menu";
import device from "../../utils/mediaQuerySizes";

export const StyledBurger = styled(Menu)`
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    display: none;
    @media ${device.tablet} {
        display: flex;
    }
`;
