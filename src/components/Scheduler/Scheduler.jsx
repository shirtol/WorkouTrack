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
import { v4 as uuid } from "uuid";
import ExerciseForm from "./exerciseForm/ExerciseForm";
import Appointment from "./appointment/Appointment";
import AppointmentContent from "./appointment/AppointmentContent";
import "./scheduler.css";
import { deleteDocument, setDocument } from "../../utils/firebaseUtils";
import { useFirebase } from "../../context/FirebaseContext";
import { emptyAppointment } from "./appointment/emptyAppointment";
import { useExercises } from "../../context/ExercisesContext";

const Calender = () => {
    const { allExercises, setAllExercises } = useExercises();
    const { db } = useFirebase();
    const defaultAppointment = emptyAppointment;
    const commitChanges = ({ added, changed, deleted }) => {
        let data = allExercises;
        if (added) {
            const id = uuid();
            const newDataObj = { ...defaultAppointment, ...added };
            data = [...data, { ...newDataObj, id }];
            setDocument(db, "workout", newDataObj, id);
        }
        if (changed) {
            console.log(changed);
            data = data.map((exercise) => {
                if (changed[exercise.id]) {
                    console.log(exercise);
                    setDocument(
                        db,
                        "workout",
                        { ...exercise, ...changed[exercise.id] },
                        exercise.id
                    );
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
                    deleteDocument(db, "workout", exercise.id);
                    return false;
                }
            });
        }
        setAllExercises(data);
    };

    console.log(allExercises);
    return (
        <div>
            <Paper className="calender">
                <Scheduler data={allExercises} height={750}>
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
