import {
    ViewState,
    EditingState,
    IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import {
    Scheduler,
    MonthView,
    Toolbar,
    Appointments,
    AppointmentForm,
    DateNavigator,
    AppointmentTooltip,
    ConfirmationDialog,
} from "@devexpress/dx-react-scheduler-material-ui";
import Paper from "@mui/material/Paper";
import { v4 as uuid } from "uuid";
import ExerciseForm from "./exerciseForm/ExerciseForm";
import Appointment from "./appointment/Appointment";
import AppointmentContent from "./appointment/AppointmentContent";
import "./scheduler.css";
import { deleteDocument, setDocument } from "../../utils/firebaseUtils";
import { useFirebase } from "../../context/FirebaseContext";
import { emptyAppointment } from "./appointment/emptyAppointment";
import { useExercises } from "../../context/ExercisesContext";
import SchedulerTooltipContent from "./schedulerTooltip/SchedulerTooltipContent";
import Spinner from "../spinner/Spinner";
import { useState } from "react";

const Calender = () => {
    const { allExercises, setAllExercises } = useExercises();
    const { db, currentUser } = useFirebase();
    const [isLoading, setIsLoading] = useState(false);

    const commitChanges = ({ added, changed, deleted }) => {
        let data = allExercises;

        const isPlaylistNone = data.find(
            (exercise) => exercise.playlist === undefined
        );

        console.log(data);
        if (added) {
            const id = uuid();
            let newDataObj = {};
            if (isPlaylistNone !== undefined) {
                newDataObj = {
                    ...emptyAppointment,
                    ...added,
                    owner: currentUser.uid,
                };
            } else {
                newDataObj = {
                    ...emptyAppointment,
                    ...added,
                    owner: currentUser.uid,
                    playlist: {
                        owner: currentUser.uid,
                        title: "none",
                        videos: [],
                    },
                };
            }
            data = [...data, { ...newDataObj, id }];
            setIsLoading(true);
            setDocument(db, "workout", newDataObj, id);
            setIsLoading(false);
        }
        if (changed) {
            data = data.map((exercise) => {
                if (changed[exercise.id]) {
                    setIsLoading(true);
                    setDocument(
                        db,
                        "workout",
                        { ...exercise, ...changed[exercise.id] },
                        exercise.id
                    );
                    setIsLoading(false);
                    return { ...exercise, ...changed[exercise.id] };
                } else {
                    return exercise;
                }
            });
        }
        if (deleted !== undefined) {
            data = data.filter((exercise) => {
                if (exercise.id !== deleted) {
                    return true;
                } else {
                    setIsLoading(true);
                    deleteDocument(db, "workout", exercise.id);
                    setIsLoading(false);

                    return false;
                }
            });
        }
        setAllExercises(data);
    };

    return (
        <div>
            <Spinner isShown={isLoading}></Spinner>
            <Paper className="calender">
                <Scheduler data={allExercises}>
                    <ViewState defaultCurrentDate="2022-06-01"></ViewState>
                    <EditingState
                        onCommitChanges={commitChanges}
                    ></EditingState>
                    <IntegratedEditing></IntegratedEditing>
                    <MonthView />
                    <Toolbar />
                    <DateNavigator></DateNavigator>
                    <ConfirmationDialog ignoreCancel />
                    <Appointments
                        appointmentComponent={Appointment}
                        appointmentContentComponent={AppointmentContent}
                    />

                    <AppointmentTooltip
                        showOpenButton
                        showDeleteButton
                        contentComponent={SchedulerTooltipContent}
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
