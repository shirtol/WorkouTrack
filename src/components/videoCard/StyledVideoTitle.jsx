import styled, { css } from "styled-components";
import { Colors } from "../../utils/colors";
import device from "../../utils/mediaQuerySizes";

export const StyledVideoTitle = styled.h3`
    text-align: center;
    padding: 0 2rem;
    color: ${Colors.blackText};
    height: max-content;
    width: ${(props) => props.width ?? "15rem"};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 1rem;
    align-self: flex-start;
    margin: 6px;
    @media ${device.laptop} {
        align-self: center;
        width: 10rem;
        height: 2rem;
    }
    @media ${device.tablet} {
        align-self: center;
        width: 11rem;
    }
`;
