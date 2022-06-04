import { Appointments } from "@devexpress/dx-react-scheduler-material-ui";

const Appointment = ({ children, style, ...restProps }) => (
    <Appointments.Appointment
        {...restProps}
        style={{
            ...style,
            backgroundColor: "lightpink",
            borderRadius: "8px",
            fontSize: "16px",
        }}
    >
        {children}
    </Appointments.Appointment>
);

export default Appointment;
