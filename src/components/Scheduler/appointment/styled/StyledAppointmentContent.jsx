import styled from "styled-components";
import { Appointments } from "@devexpress/dx-react-scheduler-material-ui";

export const StyledAppointmentContent = styled(Appointments.AppointmentContent)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    gap: 0;
    height: 100%;
`;
