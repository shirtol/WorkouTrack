import styled, { css } from "styled-components";
import { Appointments } from "@devexpress/dx-react-scheduler-material-ui";
import difficulties from "../../../../utils/difficulties";
import { Colors } from "../../../../utils/stylesConsts";

export const StyledAppointment = styled(Appointments.Appointment)`
    ${(props) => {
        switch (props.data.difficulty) {
            case difficulties.Beginner:
                return css`
                    background-color: ${Colors.difficulty.beginner} !important;
                `;
            case difficulties.Intermediate:
                return css`
                    background-color: ${Colors.difficulty
                        .intermediate} !important;
                `;
            case difficulties.Advanced:
                return css`
                    background-color: ${Colors.difficulty.advanced} !important;
                `;

            case difficulties.Expert:
                return css`
                    background-color: ${Colors.difficulty.expert} !important;
                `;
            default:
                return css`
                    background-color: ${Colors.difficulty.default} !important;
                `;
        }
    }};
    border-radius: 8px;
    font-size: 1.5rem;
`;
