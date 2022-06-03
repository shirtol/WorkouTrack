const equipments = {
    Dumbbells: 0,
    Mat: 1,
    "Resistance Bands": 2,
    "T.R.X": 3,
    "Ballet Bar": 4,
    "Yoga blocks": 5,
};

export const createEquipmentsObj = () => {
    return Object.keys(equipments).reduce((acc, curr) => {
        return { ...acc, [curr]: false };
    }, {});
};

export default equipments;
