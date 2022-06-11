import styled from "styled-components";
import { Colors } from "../../utils/colors";
import device from "../../utils/mediaQuerySizes";
import { Shadows } from "../../utils/stylesConsts";

export const StyledHomePageBox = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    display: flex;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    gap: 0;
    background: ${Colors.homePageBoxBg};
    box-shadow: ${Shadows.homePageBoxShadow};
    @media ${device.tablet} {
        order: ${(props) => props.tabletOrder ?? 0};
        width: ${(props) => props.tabletWidth ?? props.width};
    }
    @media ${device.mobileL} {
        height: ${(props) => props.heightMobileL ?? props.height};
        width: ${(props) =>
            props.mobileLWidth ?? props.tabletWidth ?? props.width};
    }
`;
