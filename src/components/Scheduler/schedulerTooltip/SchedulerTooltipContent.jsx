import { AppointmentTooltip } from "@devexpress/dx-react-scheduler-material-ui";
import React from "react";
import { tooltipImages } from "../../../utils/images";
import { StyledLink } from "../../link/StyledLink";
import { StyledTooltipWrapper } from "../appointment/styled/StyledTooltipWrapper";
import { StyledTooltipImage } from "./StyledTooltipImage";
import { StyledTooltipLink } from "./StyledTooltipLink";

const SchedulerTooltipContent = ({
    children,
    appointmentData,
    ...restProps
}) => {
    return (
        <AppointmentTooltip.Content
            {...restProps}
            appointmentData={appointmentData}
        >
            <StyledTooltipWrapper>
                <StyledTooltipImage
                    src={
                        appointmentData.playlist.title !== "none"
                            ? appointmentData.playlist.videos[0].imageUrl
                            : tooltipImages.running
                    }
                    alt="workout-preview"
                ></StyledTooltipImage>
                {appointmentData.playlist.title !== "none" && (
                    <StyledLink
                        to={{
                            pathname: `playlists/${appointmentData.playlist.id}`,
                            item: appointmentData.playlist,
                        }}
                    >
                        <StyledTooltipLink>Start Workout!</StyledTooltipLink>
                    </StyledLink>
                )}
            </StyledTooltipWrapper>
        </AppointmentTooltip.Content>
    );
};

export default SchedulerTooltipContent;
