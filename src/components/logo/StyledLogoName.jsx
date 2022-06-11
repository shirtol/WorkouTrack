import styled from "styled-components";
import { Colors } from "../../utils/stylesConsts";
import device from "../../utils/mediaQuerySizes";

export const StyledLogoName = styled.h3`
    font-size: 1.6rem;
    letter-spacing: 0.3rem;
    color: ${Colors.orange};
    @media ${device.tablet} {
        display: none;
    }
`;
