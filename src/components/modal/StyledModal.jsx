import styled from "styled-components";
import { Colors } from "../../utils/colors";
import device from "../../utils/mediaQuerySizes";
import { Shadows } from "../../utils/stylesConsts";

export const StyledModal = styled.div`
    width: 40%;
    height: 65%;
    background-color: ${Colors.whiteSmoke};
    background-image: ${Colors.modalBg};
    opacity: 0.9;
    border-radius: 8px;
    box-shadow: ${Shadows.modalBoxShadow};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: sticky;
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    text-align: center;
    letter-spacing: 2px;
    overflow-y: scroll;
    padding: 1.5rem;
    scrollbar-width: thin;
    &::-webkit-scrollbar {
        width: 5px;
        height: 8px;
        background-color: ${Colors.whiteInput};
        border-radius: 4px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: ${Colors.scrollbarThumb};
        background-image: ${Colors.scrollbarGradient};
        border-radius: 4px;
    }
    @media ${device.tablet} {
        width: 60%;
        height: 45%;
    }
`;
