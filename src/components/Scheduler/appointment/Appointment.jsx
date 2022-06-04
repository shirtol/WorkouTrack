import { StyledAppointment } from "./styled/StyledAppointment";

const Appointment = ({ children, style, ...restProps }) => (
    <StyledAppointment {...restProps}>{children}</StyledAppointment>
);

export default Appointment;
