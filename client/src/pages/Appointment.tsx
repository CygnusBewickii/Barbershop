import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {useEffect, useState} from "react";
import {TextField} from "@mui/material";
import dayjs, {Dayjs} from "dayjs";
import axios from "axios";
import {useAppSelector} from "../hooks";
function Appointment() {
    const barberId = useAppSelector((state) => state.barbershop.barberId)
    const serviceId = useAppSelector((state) => state.barbershop.serviceId)
    const [time, setTime] = useState<Dayjs | null>(dayjs());
    const [formatTime, setFormatTime] = useState<string | undefined>(dayjs().format('DD-MM-YYYY'));
    const fetchBarberFreeTime = async () => {
        const response: any = await axios.get(`http://localhost:8080/barber/${barberId}/getFreeTime/${formatTime}`)
            .then(response => response.data)


    }
    useEffect(() => setFormatTime(time?.format('DD-MM-YYYY')))

    return(
        <div>
            <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker onChange={(newTime) => {setTime(newTime)}}
                                value={time}
                                renderInput={(params) => <TextField {...params}/>}
                                label={'Введите дату'}
                                inputFormat={'DD-MM-YYYY'}
                    />
                </LocalizationProvider>
            </div>
        </div>
    )
}

export default Appointment