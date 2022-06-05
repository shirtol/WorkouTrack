import { createEquipmentsObj } from "../../../utils/equipments";
import { createWorkoutTypesObj } from "../../../utils/workoutTypes";

export const emptyAppointment = {
    allDay: false,
    difficulty: 0,
    endDate: new Date(),
    environment: 0,
    equipments: createEquipmentsObj(),
    playlist: 0,
    startDate: new Date(),
    title: "",
    workoutTypes: createWorkoutTypesObj(),
    owner: "",
};
