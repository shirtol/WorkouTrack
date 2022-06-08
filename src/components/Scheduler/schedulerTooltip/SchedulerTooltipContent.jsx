import { AppointmentTooltip } from "@devexpress/dx-react-scheduler-material-ui";
import React from "react";
import { tooltipImages } from "../../../utils/images";
import { StyledLink } from "../../link/StyledLink";

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
            <img
                src={
                    appointmentData.playlist.videos !== undefined
                        ? appointmentData.playlist.videos[0].imageUrl
                        : tooltipImages.running
                }
                alt=""
                style={{ width: "100px" }}
            />
            {appointmentData.playlist !== "none" && (
                <StyledLink
                    to={{
                        pathname: `playlists/${appointmentData.playlist.id}`,
                        item: appointmentData.playlist,
                    }}
                >
                    Start Workout!
                </StyledLink>
            )}
        </AppointmentTooltip.Content>
    );
};

export default SchedulerTooltipContent;
