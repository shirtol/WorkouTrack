import styled from "styled-components";
import { Colors } from "../../utils/colors";
import device from "../../utils/mediaQuerySizes";

export const StyledInput = styled.input`
    font-family: "Poppins", sans-serif;
    letter-spacing: 1.5px;
    height: 3rem;
    width: 30rem;
    border-radius: 4px;
    border: none;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 2px 0px,
        rgba(14, 30, 37, 0.32) 0px 2px 10px 0px;
    user-select: all;
    padding-left: 1rem;
    &:focus {
        outline: none;
        border: ${Colors.orange} 1px solid;
    }
    background: ${(props) => props.color ?? "#fff"};
    @media ${device.tablet} {
        width: 20rem;
    }
    @media ${device.mobileM} {
        width: 15rem;
    }
`;
