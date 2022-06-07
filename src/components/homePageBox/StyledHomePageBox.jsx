import styled from "styled-components";
import { Colors } from "../../utils/colors";
import device from "../../utils/mediaQuerySizes";

export const StyledHomePageBox = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
`;
