import styled from "styled-components";
import device from "../../../../utils/mediaQuerySizes";

export const StyledAppointmentEnvironment = styled.h5`
    font-size: 1.2rem;
    @media ${device.tablet} {
        display: none;
    }
`;
