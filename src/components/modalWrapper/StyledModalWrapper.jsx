import styled from "styled-components";
import { Colors } from "../../utils/colors";

export const StyledModalWrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    background: ${Colors.modalWrapperBg};
`;
