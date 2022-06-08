import styled from "styled-components";
import { Colors } from "../../utils/colors";
import device from "../../utils/mediaQuerySizes";

export const StyledHomePageBox = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    display: flex;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    gap: 0;
    background: rgb(255, 255, 255);
    background: linear-gradient(
        190deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(241, 241, 241, 0.6923144257703081) 58%,
        rgba(230, 110, 57, 0.40379901960784315) 100%
    );
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
        rgba(0, 0, 0, 0.22) 0px 15px 12px;
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
