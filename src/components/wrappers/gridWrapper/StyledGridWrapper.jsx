import styled from "styled-components";
import device from "../../../utils/mediaQuerySizes";

export const StyledGridWrapper = styled.div`
    display: grid;
    grid-template-columns: ${(props) =>
        props.gridTemplateCol ?? "repeat(3, 1fr)"};
    gap: 2rem;
    justify-items: center;
    padding: 2rem;
    grid-auto-rows: 1fr;
    height: max-content;
    overflow-y: scroll;
    align-self: ${(props) => props.alignSelf ?? "center"};
    @media ${device.laptopL} {
        grid-template-columns: ${(props) =>
            props.gridTemplateColLaptop ?? "repeat(3, 1fr)"};
    }
    @media ${device.tablet} {
        grid-template-columns: ${(props) =>
            props.gridTemplateColsTablet ?? "repeat(3, 1fr)"};
        height: ${(props) => props.heightTablet ?? "max-content"};
    }
    @media ${device.mobileL} {
        grid-template-columns: ${(props) =>
            props.gridTemplateColsMobileL ?? "repeat(2, 1fr)"};
    }
`;
