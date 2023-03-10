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

interface time_slot {
    id: number,
    barber_id: number,
    day_id: number,
    time: string,
    client_name: string,
    client_phone: string,
}
function Appointment() {
    const barberId = useAppSelector((state) => state.barbershop.barberId)
    const appointment_time = useAppSelector((state) => state.barbershop.appointment_time)
    const appointment_date = useAppSelector((state) => state.barbershop.appointment_date)
    const dispatch = useDispatch()
    const [formatDate, setFormatDate] = useState<string | undefined>(dayjs().format('YYYY-MM-DD'));
    const [freeTime, setFreeTime] = useState<Array<time_slot>>();
    const fetchBarberFreeTime = async () => {
        const response: any = await axios.get(`http://127.0.0.1:8000/api/barbers/${barberId}/getFreeTime/${formatDate}`)
            .then(response => response.data[0])
        setFreeTime(response)
    }

    useEffect(() => {fetchBarberFreeTime()}, [formatDate])
    useEffect(() => setFormatDate(appointment_date?.format('YYYY-MM-DD')), [appointment_date])


    return(
        <Box sx={{
            bgcolor: 'white',
            p: 2,
            borderRadius: 4,
        }}>
            <Box sx={{mb: 2}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker onChange={(newDate) => {dispatch(selectNewAppointmentDate(newDate))}}
                                value={appointment_date}
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
                    { freeTime?.map((time_slot) => {
                        return <CalendarItem time_slot={time_slot} key={time_slot.id}/>
                    }) }
                </Grid>
            </Box>
            { appointment_date != null && appointment_time != null &&
                <Box sx={{mb: 2}}>
                    <Typography>
                        <span>Выбранное время: { appointment_time }</span>
                    </Typography>
                </Box>
            }
            <SubmitButton data={appointment_time} url={'personal_data'} text={'Выбрать время'}/>
        </Box>
    )
}

export default Appointment