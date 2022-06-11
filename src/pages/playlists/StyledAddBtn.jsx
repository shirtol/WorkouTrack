import styled from "styled-components";
import { Colors } from "../../utils/colors";
import { Shadows } from "../../utils/stylesConsts";

export const StyledAddBtn = styled.i`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 20;
    cursor: pointer;
    color: ${Colors.orange};
    text-shadow: ${Shadows.addBtnBoxShadow};
`;
