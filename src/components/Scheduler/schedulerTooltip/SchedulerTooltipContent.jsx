import { AppointmentTooltip } from "@devexpress/dx-react-scheduler-material-ui";
import React from "react";
import { Link } from "react-router-dom";
import { tooltipImages } from "../../../utils/images";

const SchedulerTooltipContent = ({
    children,
    appointmentData,
    ...restProps
}) => {
    console.log(appointmentData);
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
                // src={tooltipImages.running}
                alt=""
                style={{ width: "100px" }}
            />
            <Link
                to={{
                    pathname: `schedule/${appointmentData.playlist.id}`,
                }}
                target="_blank"
            >
                Start Workout!
            </Link>
        </AppointmentTooltip.Content>
    );
};

export default SchedulerTooltipContent;
