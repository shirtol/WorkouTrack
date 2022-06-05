import styled from "styled-components";

export const StyledAddPlaylistModal = styled.div`
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
    font-family: "FuturaPT";
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
        background-color: #eec0c6;
        background-image: linear-gradient(315deg, #eec0c6 0%, #e58c8a 74%);
        border-radius: 4px;
    }
`;
