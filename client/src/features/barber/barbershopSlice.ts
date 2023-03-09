import { createSlice } from '@reduxjs/toolkit';
import dayjs, {Dayjs} from "dayjs";

interface BarbershopState {
    barberId: number | null,
    serviceId: number | null,
    appointment_time: string | null,
    appointment_date: Dayjs | null,
}

const initialState: BarbershopState = {
    barberId: null,
    serviceId: null,
    appointment_time: null,
    appointment_date: dayjs()
}
export const barbershopSlice = createSlice({
    name: 'barbershop',
    initialState,
    reducers: {
        selectNewBarber: (state, action) => {
            state.barberId = action.payload
        },
        selectNewService: (state, action) => {
            state.serviceId = action.payload
        },
        selectNewAppointmentTime: (state, action) => {
            state.appointment_time = action.payload
        },
        selectNewAppointmentDate: (state, action) => {
            state.appointment_date = action.payload
        }
    }
})


export const { selectNewBarber, selectNewService, selectNewAppointmentTime, selectNewAppointmentDate } = barbershopSlice.actions


export default barbershopSlice.reducer