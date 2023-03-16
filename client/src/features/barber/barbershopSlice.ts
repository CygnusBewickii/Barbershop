import { createSlice } from '@reduxjs/toolkit';
import dayjs, {Dayjs} from "dayjs";

interface BarbershopState {
    barberId: number | null,
    serviceId: number | null,
    appointmentTime: string | null,
    appointmentDate: Dayjs | null,
    clientPhone: string | null,
    clientName: string | null,
}

const initialState: BarbershopState = {
    barberId: null,
    serviceId: null,
    appointmentTime: null,
    appointmentDate: dayjs().add(1, 'd'),
    clientPhone: null,
    clientName: null
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
            state.clientPhone = action.payload
        },
        selectNewClientName: (state, action) => {
            state.clientName = action.payload
        }
    }
})


export const { selectNewBarber, selectNewService, selectNewAppointmentTime, selectNewAppointmentDate, selectNewClientPhone, selectNewClientName} = barbershopSlice.actions


export default barbershopSlice.reducer