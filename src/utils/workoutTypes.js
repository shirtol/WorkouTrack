const workoutTypes = {
    Legs: 0,
    Chest: 1,
    Back: 2,
    Shoulders: 3,
    Biceps: 4,
    Triceps: 5,
    Abs: 6,
    Cardio: 7,
    Glute: 8,
};

export const createWorkoutTypesObj = () => {
    return Object.keys(workoutTypes).reduce((acc, curr) => {
        return { ...acc, [curr]: false };
    }, {});
};

export default workoutTypes;
