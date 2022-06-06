const appImages = require.context("../assets/images");

export const buttonsImages = {
    addBtn: appImages("./buttons/add.png"),
};

export const tooltipImages = {
    running: appImages("./tooltip/running.png"),
};
