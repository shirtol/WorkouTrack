import styled from "styled-components";
import { Colors } from "../../utils/stylesConsts";
import device from "../../utils/mediaQuerySizes";

export const StyledAddVideoBtn = styled.i`
    padding-bottom: 1rem;
    color: ${Colors.orange};
    position: absolute;
    right: 7px;
    bottom: 3px;
    margin: 0;
    padding: 0;
    cursor: pointer;
    @media ${device.laptop} {
        position: static;
        padding: 0;
        padding-top: 6px;
    }
`;
