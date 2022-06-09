import styled from "styled-components";
import { Colors } from "../../utils/colors";

export const StyledVideoCard = styled.div`
    display: flex;
    width: 80%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: ${(props) =>
        props.boxShadow ??
        "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"};
    border-radius: 4px;
    position: relative;
    border: ${(props) =>
        props.isSelected ? `1px solid ${Colors.selectedBlue}` : "none"};
`;
