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
    overflow-y: ${(props) => props.overflowY ?? "visible"};
    @media ${device.tablet} {
        flex-direction: ${(props) => props.flexDirectionTablet ?? "row"};
        justify-content: ${(props) => props.justifyContentTablet ?? "center"};
        height: ${(props) => props.heightTablet ?? props.height ?? "auto"};
        width: ${(props) => props.tabletWidth ?? props.width};
        gap: ${(props) => props.tabletGap ?? props.gap ?? "2rem"};
    }
    @media ${device.mobileL} {
        flex-direction: ${(props) =>
            props.flexDirectionMobileL ?? props.flexDirectionTablet ?? "row"};
        height: ${(props) =>
            props.heightMobileL ??
            props.heightTablet ??
            props.height ??
            "auto"};
        width: ${(props) =>
            props.mobileLWidth ?? props.tabletWidth ?? props.width};
        gap: ${(props) =>
            props.mobileLgap ?? props.tabletGap ?? props.gap ?? "2rem"};
    }
`;
