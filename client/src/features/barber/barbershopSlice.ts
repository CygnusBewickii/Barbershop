import { createSlice } from '@reduxjs/toolkit';
import dayjs, {Dayjs} from "dayjs";

interface BarbershopState {
    barberId: number | null,
    serviceId: number | null,
    appointmentTime: string | null,
    appointmentDate: Dayjs | null,
    client_phone: string | null,
    client_name: string | null,
}

const initialState: BarbershopState = {
    barberId: null,
    serviceId: null,
    appointmentTime: null,
    appointmentDate: dayjs(),
    client_phone: null,
    client_name: null
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
            state.appointmentTime = action.payload
        },
        selectNewAppointmentDate: (state, action) => {
            state.appointmentDate = action.payload
        },
        selectNewClientPhone: (state, action) => {
            state.client_phone = action.payload
        },
        selectNewClientName: (state, action) => {
            state.client_name = action.payload
        }
    }
})


export const { selectNewBarber, selectNewService, selectNewAppointmentTime, selectNewAppointmentDate, selectNewClientPhone, selectNewClientName} = barbershopSlice.actions


export default barbershopSlice.reducer