import styled from "styled-components";

export const StyledButton = styled.div`
    padding: 0.8rem 2.8rem;
    font-size: 2rem;
    font-family: "Poppins", sans-serif;
    letter-spacing: 2px;
    border-radius: 8px;
    background-color: #e66e39;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
        rgba(0, 0, 0, 0.22) 0px 5px 7px;
    color: #fff;
    cursor: pointer;
    &:active {
        transition: box-shadow 100ms ease-in-out;
        transform: scale(0.95);
        transition: transform 100ms ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 15px 27px,
            rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }
    &:disabled {
        pointer-events: none;
        opacity: 0.7;
    }
`;
