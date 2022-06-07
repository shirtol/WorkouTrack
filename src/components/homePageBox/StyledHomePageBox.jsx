import styled from "styled-components";
import { Colors } from "../../utils/colors";

export const StyledHomePageBox = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    display: flex;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    border: 2px solid ${Colors.orange};
    border-radius: 4px;
    gap: 0;
    background-color: #f1f1f1;
    background-image: linear-gradient(315deg, #f1f1f13e 0%, #e9e9e944 74%);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
`;
