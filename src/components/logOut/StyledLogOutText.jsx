import styled from "styled-components";
import { Colors } from "../../utils/colors";

export const StyledLogOutText = styled.p`
    font-size: 2rem;
    color: ${Colors.blackText};
    cursor: pointer;
    padding: 0;
    margin: 0;
    &:hover {
        color: ${Colors.orange};
        transition: 200ms ease-in-out;
    }
`;
