import styled, { css } from "styled-components";
import { Appointments } from "@devexpress/dx-react-scheduler-material-ui";
import difficulties from "../../../../utils/difficulties";

export const StyledAppointment = styled(Appointments.Appointment)`
    ${(props) => {
        switch (props.data.difficulty) {
            case difficulties.Beginner:
                return css`
                    background-color: #4caf50aa !important;
                `;
            case difficulties.Intermediate:
                return css`
                    background-color: #64b5f6aa !important;
                `;
            case difficulties.Advanced:
                return css`
                    background-color: #ff9800aa !important;
                `;

            case difficulties.Expert:
                return css`
                    background-color: #9500aeaa !important;
                `;
            default:
                return css`
                    background-color: #e0e0e0 !important;
                `;
        }
    }};
    border-radius: 8px;
    font-size: 1.5rem;
`;
