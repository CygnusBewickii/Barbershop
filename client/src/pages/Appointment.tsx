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

interface timeSlot {
    id: number,
    barberId: number,
    dayId: number,
    time: string,
    clientName: string,
    clientPhone: string,
}
function Appointment() {
    const barberId = useAppSelector((state) => state.barbershop.barberId)
    const appointmentTime = useAppSelector((state) => state.barbershop.appointmentTime)
    const appointmentDate = useAppSelector((state) => state.barbershop.appointmentDate)
    const dispatch = useDispatch()
    const [formatDate, setFormatDate] = useState<string | undefined>(dayjs().format('YYYY-MM-DD'));
    const [freeTime, setFreeTime] = useState<Array<timeSlot>>();
    const fetchBarberFreeTime = async () => {
        const response: any = await axios.get(`http://127.0.0.1:8000/api/barbers/${barberId}/getFreeTime/${formatDate}`)
            .then(response => response.data[0])
        setFreeTime(response)
    }

    useEffect(() => {fetchBarberFreeTime()}, [formatDate])
    useEffect(() => setFormatDate(appointmentDate?.format('YYYY-MM-DD')), [appointmentDate])


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