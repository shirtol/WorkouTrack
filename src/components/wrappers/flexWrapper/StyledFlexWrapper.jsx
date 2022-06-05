import styled from "styled-components";

export const StyledFlexWrapper = styled.div`
    display: flex;
    flex-direction: ${(props) => props.flexDirection ?? "row"};
    gap: 2rem;
    align-items: center;
    width: ${(props) => props.width ?? "100%"};
    justify-content: ${(props) => props.justifyContent ?? "center"};
    height: ${(props) => props.height ?? "auto"};
`;
