import styled from "styled-components";

export const StyledGridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    justify-items: center;
    padding: 2rem;
    grid-auto-rows: 1fr;
    height: max-content;
    overflow-y: scroll;
`;
