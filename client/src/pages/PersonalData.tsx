import {Box, Button, TextField, Typography} from "@mui/material";
import PhoneNumberInput from "../components/PhoneNumberInput";
import {useAppSelector} from "../hooks";
import {useDispatch} from "react-redux";
import {selectNewClientName} from "../features/barber/barbershopSlice";
import axios from "axios";

function PersonalData() {
    const barberId = useAppSelector((state) => state.barbershop.barberId);
    const serviceId = useAppSelector((state) => state.barbershop.serviceId);
    const appointmentTime = useAppSelector(state => state.barbershop.appointmentTime);
    const appointmentDate = useAppSelector(state => state.barbershop.appointmentDate)
    const clientName = useAppSelector(state => state.barbershop.client_name);
    const clientPhone = useAppSelector(state => state.barbershop.client_phone);
    const dispatch = useDispatch();

    const createAppointment = async () => {
        await axios.post('')
    }
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
                    <TextField required name={"client-name"} label={"Ваше имя"} onChange={(event) => {dispatch(selectNewClientName(event.target.name))}} />
                </Box>
                <Box sx={{
                    mb: 2
                }}>
                    <PhoneNumberInput/>
                </Box>
                <Button type='submit' variant='contained' onClick={createAppointment} sx={{
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