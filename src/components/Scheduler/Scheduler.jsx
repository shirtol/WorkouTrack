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

import "./scheduler.css";

const schedulerData = [
    {
        title: "Prepare 2015 Marketing Plan",
        startDate: new Date(2022, 5, 1, 13, 0),
        endDate: new Date(2022, 5, 1, 14, 0),
        id: uuid(),
    },
    {
        title: "Brochure Design Review",
        startDate: new Date(2022, 5, 2, 10, 0),
        endDate: new Date(2022, 5, 2, 11, 0),
        id: uuid(),
    },
];

const Calender = () => {
    const [exercises, setExercises] = useState(schedulerData);

    const [currViewName, setCurrViewName] = useState("week");

    // const saveExercise = (exercise) => {
    // const newExercisesArr = [...exercises];
    // newExercisesArr.push(exercise.added);
    // setExercises(newExercisesArr);
    // };

    const currentViewNameChange = (currentViewName) => {
        setCurrViewName(currViewName);
    };

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
                    <ViewState
                        onCurrentViewNameChange={currentViewNameChange}
                        defaultCurrentDate="2022-06-01"
                    ></ViewState>
                    <EditingState
                        onCommitChanges={commitChanges}
                    ></EditingState>
                    <IntegratedEditing></IntegratedEditing>
                    <WeekView startDayHour={5} endDayHour={23}></WeekView>
                    <MonthView startDayHour={5} endDayHour={23} />
                    <DayView startDayHour={5} endDayHour={23} />
                    <Toolbar />
                    <DateNavigator></DateNavigator>
                    <ViewSwitcher />
                    <Appointments></Appointments>
                    <ConfirmationDialog ignoreCancel />

                    <AppointmentTooltip
                        showOpenButton
                        showDeleteButton
                    ></AppointmentTooltip>

                    <AppointmentForm></AppointmentForm>
                </Scheduler>
            </Paper>
        </div>
    );
};

export default Calender;
