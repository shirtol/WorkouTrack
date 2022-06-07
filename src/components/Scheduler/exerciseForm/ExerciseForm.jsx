import { AppointmentForm } from "@devexpress/dx-react-scheduler-material-ui";
import { useEffect, useState } from "react";
import workoutEnvironments from "../../../utils/workoutEnvironments";
import difficulties from "../../../utils/difficulties";
import equipments, { createEquipmentsObj } from "../../../utils/equipments";
import workoutTypes, {
    createWorkoutTypesObj,
} from "../../../utils/workoutTypes";
import { useFirebase } from "../../../context/FirebaseContext";
import { usePlaylists } from "../../../context/PlaylistsContext";

const ExerciseForm = ({ onFieldChange, appointmentData, ...restProps }) => {
    const { currentUser } = useFirebase();
    const [environment, setEnvironment] = useState(
        appointmentData.environment ?? workoutEnvironments.Indoor
    );
    const { allPlaylists } = usePlaylists();

    const allPlaylistsTitles = allPlaylists.reduce((acc, curr, idx) => {
        return { ...acc, [curr.title]: idx };
    }, {});

    const [playlist, setPlaylist] = useState(appointmentData.playlist ?? 0);

    const [difficulty, setDifficulty] = useState(
        appointmentData.difficulty ?? difficulties.Beginner
    );
    const [selectedEquipments, setSelectedEquipments] = useState(
        appointmentData.equipments ?? createEquipmentsObj()
    );
    const [selectedWorkoutTypes, setSelectedWorkoutTypes] = useState(
        appointmentData.workoutTypes ?? createWorkoutTypesObj()
    );

    useEffect(() => {
        appointmentData.difficulty = difficulty;
        appointmentData.playlist = playlist;
        appointmentData.environment = environment;
        appointmentData.equipments = selectedEquipments;
        appointmentData.workoutTypes = selectedWorkoutTypes;
        appointmentData.owner = currentUser.uid;
    });

    const onEnvironmentChange = (nextValue) => {
        onFieldChange({ environment: nextValue });
        setEnvironment(nextValue);
    };

    const createEnvironmentsArr = () => {
        return Object.keys(workoutEnvironments).map((environment, idx) => {
            return { text: environment, id: idx };
        });
    };

    const onPlaylistChange = (nextValue) => {
        console.log(nextValue);
        console.log(typeof nextValue);

        onFieldChange({ playlist: allPlaylists[nextValue] });
        setPlaylist(nextValue);
    };

    const createPlaylistsArr = () => {
        return Object.keys(allPlaylistsTitles).map((playlist, idx) => {
            return { text: playlist, id: idx };
        });
    };

    const onDifficultyChange = (nextValue) => {
        onFieldChange({ difficulty: nextValue });
        setDifficulty(nextValue);
    };

    const createDifficultyArr = () => {
        return Object.keys(difficulties).map((difficulty, idx) => {
            return { text: difficulty, id: idx };
        });
    };

    const onEquipmentChange = (isSelected, key) => {
        onFieldChange({
            equipments: { ...selectedEquipments, [key]: isSelected },
        });
        setSelectedEquipments((prevSelectedEquipments) => ({
            ...prevSelectedEquipments,
            [key]: isSelected,
        }));
    };

    const displayEquipments = () => {
        const equipmentsArr = Object.keys(equipments).map((equipment) => {
            return {
                label: equipment,
                value: selectedEquipments[equipment],
                onValueChange: onEquipmentChange,
            };
        });

        return equipmentsArr.map(({ label, value, onValueChange }) => {
            return (
                <AppointmentForm.BooleanEditor
                    key={label}
                    label={label}
                    value={value}
                    onValueChange={(isSelected) =>
                        onValueChange(isSelected, label)
                    }
                ></AppointmentForm.BooleanEditor>
            );
        });
    };

    const onWorkoutTypeChange = (isSelected, key) => {
        onFieldChange({
            workoutTypes: { ...selectedWorkoutTypes, [key]: isSelected },
        });
        setSelectedWorkoutTypes((prevSelectedWorkoutTypes) => ({
            ...prevSelectedWorkoutTypes,
            [key]: isSelected,
        }));
    };

    const displayWorkoutTypes = () => {
        const workoutTypesArr = Object.keys(workoutTypes).map((workoutType) => {
            return {
                label: workoutType,
                value: selectedWorkoutTypes[workoutType],
                onValueChange: onWorkoutTypeChange,
            };
        });
        return workoutTypesArr.map(({ label, value, onValueChange }) => {
            return (
                <AppointmentForm.BooleanEditor
                    key={label}
                    label={label}
                    value={value}
                    onValueChange={(isSelected) =>
                        onValueChange(isSelected, label)
                    }
                ></AppointmentForm.BooleanEditor>
            );
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
                onValueChange={onEnvironmentChange}
                availableOptions={createEnvironmentsArr()}
            ></AppointmentForm.Select>

            <AppointmentForm.Label text="Playlist" type="title" />
            <AppointmentForm.Select
                value={playlist}
                onValueChange={onPlaylistChange}
                availableOptions={createPlaylistsArr()}
            ></AppointmentForm.Select>

            <AppointmentForm.Label text="Difficulty" type="title" />
            <AppointmentForm.Select
                value={difficulty}
                onValueChange={onDifficultyChange}
                availableOptions={createDifficultyArr()}
            ></AppointmentForm.Select>

            <AppointmentForm.Label text="Equipments" type="title" />
            <>{displayEquipments()}</>

            <AppointmentForm.Label text="Workout Type" type="title" />
            <>{displayWorkoutTypes()}</>
        </AppointmentForm.BasicLayout>
    );
};

export default ExerciseForm;
