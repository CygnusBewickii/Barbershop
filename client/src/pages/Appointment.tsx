import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {useEffect, useState} from "react";
import {Box, Grid, TextField, Typography} from "@mui/material";
import dayjs from "dayjs";
import axios from "axios";
import {useAppSelector} from "../hooks";
import CalendarItem from "../components/CalendarItem";
import SubmitButton from "../components/SubmitButton";
import {useDispatch} from "react-redux";
import {selectNewAppointmentDate} from "../features/barber/barbershopSlice";
import {useNavigate} from "react-router-dom";
import useRedirectOnReload from "../hooks/useRedirectOnReaload";
import fetchBarberFreeTime from "../utils/fetchBarberFreeTime";

interface timeSlot {
    id: number,
    barberId: number,
    dayId: number,
    time: string,
    clientName: string,
    clientPhone: string,
}
function Appointment() {
    const barberId = useAppSelector((state) => state.barbershop.barberId);
    const appointmentTime = useAppSelector((state) => state.barbershop.appointmentTime);
    const appointmentDate = useAppSelector((state) => state.barbershop.appointmentDate);
    const [freeTime, setFreeTime] = useState<Array<timeSlot>>();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useRedirectOnReload(barberId, navigate);
    useEffect(() => {
        fetchBarberFreeTime(barberId, appointmentDate).then(data => setFreeTime(data))
    }, [appointmentDate])

    return(
        <Box sx={{
            bgcolor: 'white',
            p: 2,
            borderRadius: 4,
        }}>
            <Box sx={{mb: 2}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker onChange={(newDate) => {dispatch(selectNewAppointmentDate(newDate))}}
                                value={appointmentDate}
                                renderInput={(params) => <TextField {...params}/>}
                                label={'Выберите дату'}
                                inputFormat={'DD-MM-YYYY'}
                                maxDate={dayjs().add(2, 'M')}
                    />
                </LocalizationProvider>
            </Box>
            <div>
            </div>
            <Box sx={{mb: 2}}>
                <Typography>Выберите время:</Typography>
                <Grid container spacing={2} sx={{mt:0.2}}>
                    { freeTime?.map((timeSlot) => {
                        return <CalendarItem timeSlot={timeSlot} key={timeSlot.id}/>
                    }) }
                </Grid>
            </Box>
            { appointmentDate != null && appointmentTime != null &&
                <Box sx={{mb: 2}}>
                    <Typography>
                        <span>Выбранное время: { appointmentTime }</span>
                    </Typography>
                </Box>
            }
            <SubmitButton data={appointmentTime} url={'personal_data'} text={'Выбрать время'}/>
        </Box>
    )
}

export default Appointment