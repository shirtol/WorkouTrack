import * as React from "react";
import Paper from "@mui/material/Paper";
import {
    AppointmentForm,
    EditingState,
    ViewState,
} from "@devexpress/dx-react-scheduler";
import {
    Scheduler,
    WeekView,
    Appointments,
    Toolbar,
    ViewSwitcher,
    MonthView,
    DayView,
    DateNavigator,
    DragDropProvider,
} from "@devexpress/dx-react-scheduler-material-ui";

import "./scheduler.css";

export const appointments = [
    {
        title: "Prepare 2015 Marketing Plan",
        startDate: new Date(2022, 5, 25, 13, 0),
        endDate: new Date(2022, 5, 25, 13, 30),
        priority: 2,
        location: "Room 3",
    },
    {
        title: "Brochure Design Review",
        startDate: new Date(2022, 5, 28, 14, 10),
        endDate: new Date(2022, 5, 28, 15, 30),
        priority: 1,
        location: "Room 1",
    },
    {
        title: "Website Re-Design Plan",
        startDate: new Date(2022, 5, 29, 9, 30),
        endDate: new Date(2022, 5, 29, 11, 30),
        priority: 1,
        location: "Room 3",
    },
    {
        title: "Book Flights to San Fran for Sales Trip",
        startDate: new Date(2022, 6, 2, 12, 0),
        endDate: new Date(2022, 6, 2, 13, 0),
        priority: 3,
        location: "Room 2",
    },
    {
        title: "Install New Router in Dev Room",
        startDate: new Date(2022, 6, 2, 14, 30),
        endDate: new Date(2022, 6, 2, 15, 30),
        priority: 2,
        location: "Room 3",
    },
    {
        title: "Approve Personal Computer Upgrade Plan",
        startDate: new Date(2022, 6, 4, 10, 0),
        endDate: new Date(2022, 6, 4, 11, 0),
        priority: 1,
        location: "Room 1",
    },
    {
        title: "Final Budget Review",
        startDate: new Date(2022, 6, 6, 12, 0),
        endDate: new Date(2022, 6, 6, 13, 35),
        priority: 3,
        location: "Room 1",
    },
    {
        title: "New Brochures",
        startDate: new Date(2022, 6, 6, 14, 30),
        endDate: new Date(2022, 6, 6, 15, 45),
        priority: 3,
        location: "Room 3",
    },
    {
        title: "Install New Database",
        startDate: new Date(2022, 6, 10, 9, 45),
        endDate: new Date(2022, 6, 10, 11, 15),
        priority: 2,
        location: "Room 2",
    },
    {
        title: "Approve New Online Marketing Strategy",
        startDate: new Date(2022, 6, 12, 12, 0),
        endDate: new Date(2022, 6, 12, 14, 0),
        priority: 1,
        location: "Room 2",
    },
    {
        title: "Upgrade Personal Computers",
        startDate: new Date(2022, 6, 16, 15, 15),
        endDate: new Date(2022, 6, 16, 16, 30),
        priority: 2,
        location: "Room 3",
    },
    {
        title: "Customer Workshop",
        startDate: new Date(2022, 6, 18, 11, 0),
        endDate: new Date(2022, 6, 18, 12, 0),
        priority: 3,
        location: "Room 1",
    },
    {
        title: "Prepare 2015 Marketing Plan",
        startDate: new Date(2022, 6, 20, 11, 0),
        endDate: new Date(2022, 6, 20, 13, 30),
        priority: 1,
        location: "Room 3",
    },
    {
        title: "New Brochures",
        startDate: new Date(2022, 6, 23, 14, 30),
        endDate: new Date(2022, 6, 23, 15, 45),
        priority: 2,
        location: "Room 3",
    },
    {
        title: "Install New Database",
        startDate: new Date(2022, 6, 23, 9, 45),
        endDate: new Date(2022, 6, 23, 11, 15),
        priority: 3,
        location: "Room 2",
    },
    {
        title: "Approve New Online Marketing Strategy",
        startDate: new Date(2022, 6, 26, 12, 0),
        endDate: new Date(2022, 6, 26, 14, 0),
        priority: 1,
        location: "Room 1",
    },
    {
        title: "Upgrade Personal Computers",
        startDate: new Date(2022, 6, 31, 15, 15),
        endDate: new Date(2022, 6, 31, 16, 30),
        priority: 2,
        location: "Room 3",
    },
    {
        title: "Install New Database",
        startDate: new Date(2022, 6, 31, 9, 45),
        endDate: new Date(2022, 6, 31, 11, 15),
        priority: 3,
        location: "Room 2",
    },
];

const dragDisableIds = new Set([3, 8, 10, 12]);

export const allowDrag = ({ id }) => !dragDisableIds.has(id);
const appointmentComponent = (props) => {
    if (allowDrag(props.data)) {
        return <Appointments.Appointment {...props} />;
    }
    return (
        <Appointments.Appointment
            {...props}
            style={{ ...props.style, cursor: "not-allowed" }}
        />
    );
};

export const commitChanges = ({ added, changed, deleted }) => {
    this.setState((state) => {
        let { data } = state;
        if (added) {
            const startingAddedId =
                data.length > 0 ? data[data.length - 1].id + 1 : 0;
            data = [...data, { id: startingAddedId, ...added }];
        }
        if (changed) {
            data = data.map((appointment) =>
                changed[appointment.id]
                    ? { ...appointment, ...changed[appointment.id] }
                    : appointment
            );
        }
        if (deleted !== undefined) {
            data = data.filter((appointment) => appointment.id !== deleted);
        }
        return { data };
    });
};

export default class SchedulerWrapper extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data: appointments,
            currentViewName: "work-week",
        };
        this.currentViewNameChange = (currentViewName) => {
            this.setState({ currentViewName });
        };
    }

    render() {
        const { data, currentViewName } = this.state;

        return (
            <Paper className="scheduler">
                <Scheduler data={appointments}>
                    <ViewState
                        currentViewName={currentViewName}
                        onCurrentViewNameChange={this.currentViewNameChange}
                        defaultCurrentDate="2022-06-01"
                    />

                    <WeekView startDayHour={10} endDayHour={19} />
                    <WeekView
                        name="work-week"
                        displayName="Work Week"
                        excludedDays={[0, 6]}
                        startDayHour={9}
                        endDayHour={19}
                    />
                    <MonthView />
                    <DayView />

                    <Toolbar />
                    <DateNavigator></DateNavigator>
                    <ViewSwitcher />
                    <EditingState onCommitChanges={commitChanges} />
                    <Appointments />
                    <DragDropProvider />
                </Scheduler>
            </Paper>
        );
    }
}
