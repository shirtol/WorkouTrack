import styled from "styled-components";
import device from "../../../../utils/mediaQuerySizes";

export const StyledAppointmentEnvironment = styled.h5`
    @media ${device.tablet} {
        display: none;
    }
`;
