import styled from "styled-components";
import { Colors } from "../../utils/colors";

export const StyledDeleteIcon = styled.i`
    position: absolute;
    bottom: 5px;
    right: 5px;
    z-index: 5;
    cursor: pointer;
    color: ${Colors.greyIcon};
    text-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;
