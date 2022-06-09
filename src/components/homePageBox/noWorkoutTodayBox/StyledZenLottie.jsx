import styled from "styled-components";
import Lottie from "lottie-react";
import device from "../../../utils/mediaQuerySizes";

export const StyledZenLottie = styled(Lottie)`
    width: 20rem;
    @media ${device.tablet} {
        width: 13rem;
    }
`;
