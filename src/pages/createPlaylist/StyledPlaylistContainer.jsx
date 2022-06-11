import styled from "styled-components";
import { Colors } from "../../utils/colors";
import device from "../../utils/mediaQuerySizes";
import { Shadows } from "../../utils/stylesConsts";

export const StyledPlaylistContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: flex-start;
    box-shadow: ${Shadows.playlistBoxShadow};
    border-radius: 4px;
    width: 20%;
    height: 70%;
    position: ${(props) => props.position ?? "fixed"};
    top: 20%;
    left: 2rem;
    overflow-y: scroll;
    border: 1.5px solid ${Colors.orange};
    @media ${device.tablet} {
        flex-direction: row;
        padding-left: 3rem;
        height: inherit;
        top: 78%;
        overflow-x: scroll;
        width: 70%;
        align-self: center;
        height: 15%;
        transform: translateX(-50%, -50%);
        padding: 2rem;
    }
`;
