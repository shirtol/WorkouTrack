import styled from "styled-components";
import { Colors } from "../../utils/colors";

export const StyledPlaylistContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: flex-start;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    border-radius: 4px;
    width: 20%;
    height: 70%;
    position: ${(props) => props.position ?? "fixed"};
    top: 20%;
    left: 2rem;
    overflow-y: scroll;
    border: 1.5px solid ${Colors.orange};
`;
