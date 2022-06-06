import styled from "styled-components";

export const StyledModal = styled.div`
    width: 40%;
    height: 65%;
    background-color: #f6f6f6;
    background-image: linear-gradient(315deg, #f6f6f6 0%, #e9e9e9 74%);
    opacity: 0.9;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
        rgba(0, 0, 0, 0.22) 0px 15px 12px;
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
        background-color: #fff;
        border-radius: 4px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #ff4e00;
        background-image: linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%);
        border-radius: 4px;
    }
`;
