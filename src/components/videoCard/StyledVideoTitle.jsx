import styled, { css } from "styled-components";
import { Colors } from "../../utils/colors";

export const StyledVideoTitle = styled.h3`
    text-align: center;
    padding: 0 2rem;
    color: ${Colors.blackText};
    height: 20%;
    width: 10rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
