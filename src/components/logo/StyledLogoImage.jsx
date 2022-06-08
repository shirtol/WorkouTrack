import styled from "styled-components";
import device from "../../utils/mediaQuerySizes";

export const StyledLogoImage = styled.img`
    width: 7rem;
    @media ${device.tablet} {
        width: 5rem;
    }
`;
