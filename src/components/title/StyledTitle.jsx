import styled from "styled-components";
import device from "../../utils/mediaQuerySizes";

export const StyledTitle = styled.div`
    font-size: 2.6rem;
    text-align: center;
    margin-top: ${(props) => props.marginTop ?? "0"};
    @media ${device.tablet} {
        font-size: 2.2rem;
    }
    @media ${device.mobileL} {
        font-size: 2rem;
    }
`;
