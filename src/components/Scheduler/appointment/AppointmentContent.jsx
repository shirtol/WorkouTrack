import { tooltipImages } from "../../../utils/images";
import { getKeyByValue } from "../../../utils/utils";
import workoutEnvironments from "../../../utils/workoutEnvironments";
import { imagesObj } from "../../../utils/workoutTypes";
import { StyledAppointmentContent } from "./styled/StyledAppointmentContent";
import { StyledAppointmentDetails } from "./styled/StyledAppointmentDetails";
import { StyledAppointmentEnvironment } from "./styled/StyledAppointmentEnvironment";
import { StyledAppointmentImage } from "./styled/StyledAppointmentImage";
import { StyledAppointmentTitle } from "./styled/StyledAppointmentTitle";

const AppointmentContent = ({ children, style, ...restProps }) => {
    const getWorkoutType = () => {
        return Object.keys(restProps.data.workoutTypes).find(
            (type) => restProps.data.workoutTypes[type] === true
        );
    };

    return (
        <StyledAppointmentContent {...restProps}>
            <StyledAppointmentDetails>
                <StyledAppointmentTitle>
                    {restProps.data.title}
                </StyledAppointmentTitle>
                <StyledAppointmentEnvironment>
                    {getKeyByValue(
                        workoutEnvironments,
                        restProps.data.environment
                    )}
                </StyledAppointmentEnvironment>
            </StyledAppointmentDetails>
            <StyledAppointmentImage
                src={imagesObj[getWorkoutType()] || tooltipImages.running}
                alt="workout-type"
            ></StyledAppointmentImage>
        </StyledAppointmentContent>
    );
};

export default AppointmentContent;
