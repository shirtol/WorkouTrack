import styled from "styled-components";
import { Colors } from "../../utils/colors";

export const StyledPlaylistNameInput = styled.input`
    border: none;
    border-bottom: 1px solid ${Colors.orange};
    font-size: 2rem;
    background-color: transparent;
    padding-left: 10px;
    &:focus {
        outline: none;
    }
`;
