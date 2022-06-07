import styled from "styled-components";
import { Colors } from "../../utils/colors";
import device from "../../utils/mediaQuerySizes";

export const StyledAddVideoBtn = styled.i`
    padding-bottom: 1rem;
    color: ${Colors.orange};
    position: absolute;
    right: 7px;
    bottom: 3px;
    cursor: pointer;
    @media ${device.laptop} {
        position: static;
    }
`;
