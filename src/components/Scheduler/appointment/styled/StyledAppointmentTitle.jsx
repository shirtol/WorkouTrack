import styled from "styled-components";
import device from "../../../../utils/mediaQuerySizes";

export const StyledAppointmentTitle = styled.h3`
    font-size: 1.5rem;
    @media ${device.tablet} {
        display: none;
    }
`;
