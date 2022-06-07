import styled from "styled-components";
import { Colors } from "../../utils/colors";
import device from "../../utils/mediaQuerySizes";

export const StyledPlaylistNameInput = styled.input`
    border: none;
    border-bottom: 1px solid ${Colors.orange};
    font-size: 2rem;
    background-color: transparent;
    padding-left: 10px;
    &:focus {
        outline: none;
    }
    @media ${device.mobileL} {
        width: 15rem;
        font-size: 1.4rem;
    }
    @media ${device.mobileM} {
        width: 10rem;
        font-size: 1.2rem;
    }
`;
