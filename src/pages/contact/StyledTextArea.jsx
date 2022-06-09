import styled from "styled-components";
import { Colors } from "../../utils/colors";
import device from "../../utils/mediaQuerySizes";

export const StyledTextArea = styled.textarea`
    resize: none;
    width: 30rem;
    font-family: "Poppins", sans-serif;
    letter-spacing: 1.5px;
    height: 20rem;
    border-radius: 4px;
    border: none;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 2px 0px,
        rgba(14, 30, 37, 0.32) 0px 2px 10px 0px;
    user-select: all;
    background: ${(props) => props.color ?? "#fff"};
    padding-left: 1rem;
    &:focus {
        outline: none;
        border: ${Colors.orange} 1px solid;
    }
    @media ${device.tablet} {
        width: 20rem;
    }
    @media ${device.mobileM} {
        width: 15rem;
    }
`;
