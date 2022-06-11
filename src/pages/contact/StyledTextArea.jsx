import styled from "styled-components";
import { Colors } from "../../utils/stylesConsts";
import device from "../../utils/mediaQuerySizes";
import { Shadows } from "../../utils/stylesConsts";

export const StyledTextArea = styled.textarea`
    resize: none;
    width: 30rem;
    font-family: "Poppins", sans-serif;
    letter-spacing: 1.5px;
    height: 20rem;
    border-radius: 4px;
    border: none;
    box-shadow: ${Shadows.textAreaBoxShadow};
    user-select: all;
    background: ${(props) => props.color ?? Colors.whiteInput};
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
