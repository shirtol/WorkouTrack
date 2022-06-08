import styled from "styled-components";
import device from "../../../../utils/mediaQuerySizes";

export const StyledAppointmentImage = styled.img`
    width: 5rem;
    height: 5rem;
    align-self: center;
    @media ${device.laptop} {
        width: 4rem;
        height: 4rem;
    }
    @media ${device.mobileL} {
        width: 3rem;
        height: 3rem;
    }
`;
