import React from "react";
import { logo } from "../../utils/images";
import { StyledFlexWrapper } from "../wrappers/flexWrapper/StyledFlexWrapper";
import { StyledLogoImage } from "./StyledLogoImage";
import { StyledLogoName } from "./StyledLogoName";
import { StyledLogoWrapper } from "./StyledLogoWrapper";

const Logo = () => {
    return (
        <StyledLogoWrapper>
            <StyledFlexWrapper gap="1rem">
                <StyledLogoName>Sporterrific</StyledLogoName>
                <StyledLogoImage src={logo.logo}></StyledLogoImage>
            </StyledFlexWrapper>
        </StyledLogoWrapper>
    );
};

export default Logo;
