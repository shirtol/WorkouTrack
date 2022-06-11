import styled from "styled-components";

export const StyledNavbarItem = styled.li`
    & > * {
        text-decoration: none;
        color: ${(props) => props.color ?? "#333"};
        &:hover {
            color: #ff500a;
            transition: 200ms ease-in-out;
        }
    }
`;
