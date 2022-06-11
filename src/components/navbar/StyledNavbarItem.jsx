import styled from "styled-components";
import { Colors } from "../../utils/colors";

export const StyledNavbarItem = styled.li`
    & > * {
        text-decoration: none;
        color: ${(props) => props.color ?? Colors.blackText};
        &:hover {
            color: ${Colors.orange};
            transition: 200ms ease-in-out;
        }
    }
`;
