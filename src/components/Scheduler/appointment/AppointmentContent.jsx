import { getKeyByValue } from "../../../utils/utils";
import workoutEnvironments from "../../../utils/workoutEnvironments";
import { imagesObj } from "../../../utils/workoutTypes";
import { StyledAppointmentContent } from "./styled/StyledAppointmentContent";
import { StyledAppointmentDetails } from "./styled/StyledAppointmentDetails";
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
                <h5>
                    {getKeyByValue(
                        workoutEnvironments,
                        restProps.data.environment
                    )}
                </h5>
            </StyledAppointmentDetails>
            <StyledAppointmentImage
                src={imagesObj[getWorkoutType()]}
                alt="workout-type"
            ></StyledAppointmentImage>
            {/* <img
                src={imagesObj[getWorkoutType()]}
                alt="workout-type"
              
            /> */}
        </StyledAppointmentContent>
    );
};

export default AppointmentContent;
