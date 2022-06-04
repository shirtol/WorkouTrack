import {
    ViewState,
    EditingState,
    IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import {
    Scheduler,
    WeekView,
    MonthView,
    DayView,
    Toolbar,
    Appointments,
    AppointmentForm,
    DateNavigator,
    AppointmentTooltip,
    ConfirmationDialog,
    ViewSwitcher,
} from "@devexpress/dx-react-scheduler-material-ui";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import Months from "../../utils/months";
import ExerciseForm from "./exerciseForm/ExerciseForm";
import workoutEnvironments from "../../utils/workoutEnvironments";
import Appointment from "./appointment/Appointment";
import AppointmentContent from "./appointment/AppointmentContent";
import "./scheduler.css";

const schedulerData = [
    {
        title: "zumba",
        startDate: new Date(2022, Months.JUNE, 1, 13, 0),
        endDate: new Date(2022, Months.JUNE, 1, 14, 0),
        environment: workoutEnvironments.Indoor,
        id: uuid(),
    },
    {
        title: "ballet",
        startDate: new Date(2022, Months.JUNE, 2, 10, 0),
        endDate: new Date(2022, Months.JUNE, 2, 11, 0),
        environment: workoutEnvironments.Gym,
        id: uuid(),
    },
];

const Calender = () => {
    const [exercises, setExercises] = useState(schedulerData);

    const commitChanges = ({ added, changed, deleted }) => {
        let data = exercises;
        if (added) {
            data = [...data, { id: uuid(), ...added }];
        }
        if (changed) {
            data = data.map((exercise) =>
                changed[exercise.id]
                    ? { ...exercise, ...changed[exercise.id] }
                    : exercise
            );
        }
        console.log(deleted);
        if (deleted !== undefined) {
            data = data.filter((exercise) => exercise.id !== deleted);
        }
        setExercises(data);
    };

    console.log(exercises);
    return (
        <div>
            <Paper className="calender">
                <Scheduler data={exercises} height={750}>
                    <ViewState defaultCurrentDate="2022-06-01"></ViewState>
                    <EditingState
                        onCommitChanges={commitChanges}
                    ></EditingState>
                    <IntegratedEditing></IntegratedEditing>
                    {/* <WeekView></WeekView> */}
                    <MonthView />
                    {/* <DayView /> */}
                    <Toolbar />
                    <DateNavigator></DateNavigator>
                    {/* <ViewSwitcher /> */}
                    <ConfirmationDialog ignoreCancel />
                    <Appointments
                        appointmentComponent={Appointment}
                        appointmentContentComponent={AppointmentContent}
                    />

                    <AppointmentTooltip
                        showOpenButton
                        showDeleteButton
                    ></AppointmentTooltip>

                    <AppointmentForm
                        basicLayoutComponent={ExerciseForm}
                    ></AppointmentForm>
                </Scheduler>
            </Paper>
        </div>
    );
};

export default Calender;
