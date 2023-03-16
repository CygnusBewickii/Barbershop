import {Alert, AlertTitle, Box} from "@mui/material";
import {useAppSelector} from "../hooks";

function AppointmentSuccess() {
    const appointmentDate = useAppSelector(state => state.barbershop.appointmentDate)?.format('DD-MM-YYYY');
    const appointmentTime = useAppSelector(state => state.barbershop.appointmentTime);
    return(
        <Box>
            <Alert severity={'success'}>
                <AlertTitle>Запись прошла успешно</AlertTitle>
                Вы записаны на <strong>{appointmentDate}</strong> в <strong>{appointmentTime}</strong>
            </Alert>
        </Box>
    )
}

export default AppointmentSuccess;