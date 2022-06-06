import styled from "styled-components";
import { Colors } from "../../utils/colors";

export const StyledPlaylistNameInput = styled.input`
    border: none;
    border-bottom: 1px solid ${Colors.orange};
    text-align: center;
    font-size: 2rem;
    &:focus {
        outline: none;
    }
`;
