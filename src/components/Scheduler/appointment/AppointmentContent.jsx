import { Appointments } from "@devexpress/dx-react-scheduler-material-ui";

const AppointmentContent = ({ children, style, ...restProps }) => (
    <Appointments.AppointmentContent {...restProps}>
        {/* <div> */}
        {/* <div> */}
        <strong>{restProps.data.title}</strong>
        <h5>{restProps.data.playlist}</h5>
        {/* </div> */}
        {/* </div> */}
    </Appointments.AppointmentContent>
);

export default AppointmentContent;
