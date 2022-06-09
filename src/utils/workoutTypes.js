const workoutTypes = {
    Legs: 0,
    Back: 2,
    Biceps: 4,
    Abs: 6,
    Cardio: 7,
    Glute: 8,
    Ballet: 9,
    Yoga: 10,
    Weight: 11,
};

const images = require.context("../assets/images/workoutTypes");

export const imagesObj = {
    Legs: images("./Legs.png"),
    Back: images("./Back.png"),
    Biceps: images("./Biceps.png"),
    Abs: images("./Abs.png"),
    Cardio: images("./Cardio.png"),
    Glute: images("./Glute.png"),
    Ballet: images("./Ballet.png"),
    Yoga: images("./Yoga.png"),
    Weight: images("./Weight.png"),
};

export const createWorkoutTypesObj = () => {
    return Object.keys(workoutTypes).reduce((acc, curr) => {
        return { ...acc, [curr]: false };
    }, {});
};

export default workoutTypes;
