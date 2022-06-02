import { AppointmentForm } from "@devexpress/dx-react-scheduler-material-ui";
import { useState } from "react";
import workoutEnvironments from "../../../utils/workoutEnvironments";

const ExerciseForm = ({ onFieldChange, appointmentData, ...restProps }) => {
    const [environment, setEnvironment] = useState(
        appointmentData.environment ?? workoutEnvironments.Indoor
    );

    const onCustomFieldChange = (nextValue) => {
        onFieldChange({ environment: nextValue });
        setEnvironment(nextValue);
    };

    console.log(appointmentData);

    const createEnvironmentsArr = () => {
        return Object.keys(workoutEnvironments).map((environment, idx) => {
            return { text: environment, id: idx };
        });
    };

    return (
        <AppointmentForm.BasicLayout
            appointmentData={appointmentData}
            onFieldChange={onFieldChange}
            {...restProps}
        >
            <AppointmentForm.Label text="Environment" type="title" />
            <AppointmentForm.Select
                value={environment}
                onValueChange={onCustomFieldChange}
                availableOptions={createEnvironmentsArr()}
            ></AppointmentForm.Select>
        </AppointmentForm.BasicLayout>
    );
};

export default ExerciseForm;
