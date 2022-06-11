import styled from "styled-components";
import { Colors } from "../../utils/stylesConsts";
import { Shadows } from "../../utils/stylesConsts";

export const StyledDeleteIcon = styled.i`
    position: absolute;
    bottom: 5px;
    right: 5px;
    z-index: 5;
    cursor: pointer;
    color: ${Colors.greyIcon};
    text-shadow: ${Shadows.deleteIconTextShadow};
`;
