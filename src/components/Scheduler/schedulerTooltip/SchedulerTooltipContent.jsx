import { AppointmentTooltip } from "@devexpress/dx-react-scheduler-material-ui";
import React from "react";
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
                src={tooltipImages.running}
                alt=""
                style={{ width: "100px" }}
            />
            <a
                href="https://www.youtube.com/watch?v=p-3OKmrRk3A&ab_channel=ZumbaSulu"
                target="_blank"
            >
                Click!
            </a>
        </AppointmentTooltip.Content>
    );
};

export default SchedulerTooltipContent;
