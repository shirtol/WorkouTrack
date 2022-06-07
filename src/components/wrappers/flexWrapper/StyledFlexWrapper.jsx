import styled from "styled-components";
import device from "../../../utils/mediaQuerySizes";

export const StyledFlexWrapper = styled.div`
    display: flex;
    flex-direction: ${(props) => props.flexDirection ?? "row"};
    gap: ${(props) => props.gap ?? "2rem"};
    align-items: ${(props) => props.alignItems ?? "center"};
    width: ${(props) => props.width ?? "100%"};
    justify-content: ${(props) => props.justifyContent ?? "center"};
    height: ${(props) => props.height ?? "auto"};
    @media ${device.tablet} {
        flex-direction: ${(props) => props.flexDirectionTablet ?? "row"};
        justify-content: ${(props) => props.justifyContentTablet ?? "center"};
        height: ${(props) => props.heightTablet ?? props.height ?? "auto"};
        width: ${(props) => props.tabletWidth ?? props.width};
    }
`;
