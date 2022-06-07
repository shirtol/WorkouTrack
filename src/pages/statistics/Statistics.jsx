import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import Months from "../../utils/months";
import { useWorkoutsPerMonth } from "../../context/WorkoutsPerMonthContext";

const Statistics = () => {
    // const currDate = new Date();
    // const currYear = currDate.getFullYear()
    const { allWorkoutsPerMonth } = useWorkoutsPerMonth();

    console.log(allWorkoutsPerMonth);

    const getAllActiveMonths = () =>
        allWorkoutsPerMonth.map((workout) => ({
            month: workout.month,
            numOfWorkouts: workout.numOfWorkouts,
        }));

    const getArrayOfWorkoutCounts = () => {
        const monthsWorkoutsMap = getAllActiveMonths();
        const arrOfWorkoutCounts = [];
        Object.keys(Months).forEach((month) => {
            const foundObject = monthsWorkoutsMap.find(
                (monthWorkout) => monthWorkout.month === month
            );
            if (foundObject) {
                arrOfWorkoutCounts.push(foundObject.numOfWorkouts);
            } else {
                arrOfWorkoutCounts.push(0);
            }
        });
        return arrOfWorkoutCounts;
    };

    const chartData = getArrayOfWorkoutCounts();

    const data = {
        labels: Object.keys(Months),
        datasets: [
            {
                label: 2022,
                data: chartData,
                backgroundColor: [
                    "rgba(247, 184, 38, 0.6)",
                    // "rgba(255, 255, 255, 0.6)",
                    // "rgba(255, 255, 255, 0.6)",
                ],
                borderWidth: 2,
            },
        ],
    };

    return <Line data={data} />;
};

export const options = {
    responsive: true,
    interaction: {
        mode: "index",
        intersect: false,
    },
    stacked: false,
    plugins: {
        title: {
            display: true,
            text: "Chart.js Line Chart - Multi Axis",
        },
    },
    scales: {
        y: {
            type: "linear",
            display: true,
            position: "left",
        },
        y1: {
            type: "linear",
            display: true,
            position: "right",
            grid: {
                drawOnChartArea: false,
            },
        },
    },
};

export default Statistics;
