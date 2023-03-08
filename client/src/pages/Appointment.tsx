import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {useEffect, useState} from "react";
import {Box, Grid, TextField, Typography} from "@mui/material";
import dayjs, {Dayjs} from "dayjs";
import axios from "axios";
import {useAppSelector} from "../hooks";
import CalendarItem from "../components/CalendarItem";

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
    const serviceId = useAppSelector((state) => state.barbershop.serviceId)
    const [time, setTime] = useState<Dayjs | null>(dayjs());
    const [formatTime, setFormatTime] = useState<string | undefined>(dayjs().format('YYYY-MM-DD'));
    const [freeTime, setFreeTime] = useState<Array<time_slot>>();
    const fetchBarberFreeTime = async () => {
        const response: any = await axios.get(`http://127.0.0.1:8000/api/barbers/${barberId}/getFreeTime/${formatTime}`)
            .then(response => response.data[0])
        setFreeTime(response)
    }
    useEffect(() => {fetchBarberFreeTime()}, [formatTime])
    useEffect(() => setFormatTime(time?.format('YYYY-MM-DD')), [time])
    return(
        <Box sx={{
            bgcolor: 'white',
            p: 2,
            borderRadius: 4
        }}>
            <Box sx={{mb: 2}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker onChange={(newTime) => {setTime(newTime)}}
                                value={time}
                                renderInput={(params) => <TextField {...params}/>}
                                label={'Выберите дату'}
                                inputFormat={'DD-MM-YYYY'}
                    />
                </LocalizationProvider>
            </Box>
            <Box>
                <Typography>Выберите время:</Typography>
                <Grid container spacing={2} sx={{mt:0.2}}>
                    { freeTime?.map((time_slot) => {
                        return <CalendarItem time_slot={time_slot} key={time_slot.id}/>
                    }) }

                </Grid>
            </Box>
        </Box>
    )
}

export default Appointment