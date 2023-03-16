import {Box, Button, TextField, Typography} from "@mui/material";
import PhoneNumberInput from "../components/PhoneNumberInput";
import {useAppSelector} from "../hooks";
import {useDispatch} from "react-redux";
import {selectNewClientName} from "../features/barber/barbershopSlice";
import {useNavigate} from "react-router-dom";
import useRedirectOnReload from "../hooks/useRedirectOnReaload";
import createAppointment from "../utils/createAppointment";
import {useState} from "react";

function PersonalData() {
    const barberId = useAppSelector((state) => state.barbershop.barberId);
    const serviceId = useAppSelector((state) => state.barbershop.serviceId);
    const appointmentTime = useAppSelector(state => state.barbershop.appointmentTime);
    const appointmentDate = useAppSelector(state => state.barbershop.appointmentDate)
    const clientName = useAppSelector(state => state.barbershop.clientName);
    const clientPhone = useAppSelector(state => state.barbershop.clientPhone);
    const [isValidated, setIsValidated] = useState<boolean>(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCreateAppointmentButton = () => {
        if (clientName == null || clientPhone == null) {
            setIsValidated(false)
            return
        }
        const clientInfo = {
            barberId,
            serviceId,
            appointmentTime,
            appointmentDate,
            clientName,
            clientPhone,
        }
        createAppointment(clientInfo, navigate)
    }

    useRedirectOnReload(barberId, navigate);

    return(
        <Box sx={{
            bgcolor: 'white',
            borderRadius: 4,
            p: 3

        }}>
            <Box sx={{
                mb: 2
            }}>
                <Typography>
                    Введите ваши данные
                </Typography>
            </Box>
            <Box className='client-form'>
                <Box sx={{
                    mb: 1.5
                }}>
                    <TextField error={isValidated != true && clientName == null} required name={"client-name"} label={"Ваше имя"} onChange={(event) => {dispatch(selectNewClientName(event.target.value))}} />
                </Box>
                <Box sx={{
                    mb: 2
                }}>
                    <PhoneNumberInput/>
                </Box>
                <Button type='submit' variant='contained' onClick={handleCreateAppointmentButton} sx={{
                    bgcolor: 'black',
                    '&:hover': {
                        bgcolor: 'black'
                    }
                }}>Записаться</Button>
            </Box>
        </Box>
    )
}

export default PersonalData;