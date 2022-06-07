import styled from "styled-components";
import device from "../../utils/mediaQuerySizes";

export const StyledTitle = styled.div`
    font-size: 2.6rem;
    text-align: center;
    @media ${device.tablet} {
        font-size: 2.2rem;
    }
    @media ${device.mobileL} {
        font-size: 2rem;
    }
`;
