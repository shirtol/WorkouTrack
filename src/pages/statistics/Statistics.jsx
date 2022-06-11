import React from "react";
import { Line } from "react-chartjs-2";
import Months from "../../utils/months";
import { useWorkoutsPerMonth } from "../../context/WorkoutsPerMonthContext";
import { StyledStatisticsTitle } from "./StyledStatisticsTitle";
import { StyledFlexWrapper } from "../../components/wrappers/flexWrapper/StyledFlexWrapper";
import { Colors } from "../../utils/stylesConsts";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export const options = {
    responsive: true,
    interaction: {
        mode: "index",
        intersect: false,
    },
    stacked: false,
    legend: {
        labels: {
            fontSize: "10px",
        },
    },
    plugins: {
        title: {
            display: true,
            text: "Number Of Workouts Per Month",
        },
    },
    scales: {
        y: {
            type: "linear",
            display: true,
            position: "left",
            grid: {
                display: false,
            },
        },
        x: {
            grid: {
                display: false,
            },
        },
    },
};

const Statistics = () => {
    const currDate = new Date();
    const currYear = currDate.getFullYear();
    const { allWorkoutsPerMonth } = useWorkoutsPerMonth();

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
        labels: Object.keys(Months).map((month) => month.slice(0, 3)),
        datasets: [
            {
                label: currYear,
                data: chartData,
                backgroundColor: Colors.orange,
                borderWidth: 2,
            },
        ],
    };

    return (
        <StyledFlexWrapper
            flexDirection="column"
            flexDirectionTablet="column"
            flexDirectionMobileL="column"
        >
            <StyledStatisticsTitle>
                Hard Work Pays Off, Keep Going!
            </StyledStatisticsTitle>
            <Line data={data} options={options} />
        </StyledFlexWrapper>
    );
};

export default Statistics;
