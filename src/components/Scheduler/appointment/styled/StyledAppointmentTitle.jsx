import styled from "styled-components";
import device from "../../../../utils/mediaQuerySizes";

export const StyledAppointmentTitle = styled.h3`
    font-size: 1.5rem;
    width: max-content;
    max-width: 10rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media ${device.laptopL} {
        max-width: 8rem;
    }
    @media ${device.laptop} {
        max-width: 5.4rem;
    }
    @media ${device.tablet} {
        display: none;
    }
`;
