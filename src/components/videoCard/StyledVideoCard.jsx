import styled from "styled-components";
import { Colors } from "../../utils/colors";
import { Shadows } from "../../utils/stylesConsts";

export const StyledVideoCard = styled.div`
    display: flex;
    width: 80%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: ${(props) =>
        props.boxShadow ??
       Shadows.videoCardBoxShadow};
    border-radius: 4px;
    position: relative;
    border: ${(props) =>
        props.isSelected ? `1px solid ${Colors.selectedBlue}` : "none"};
`;
