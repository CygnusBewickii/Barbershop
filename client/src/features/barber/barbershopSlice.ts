import { createSlice } from '@reduxjs/toolkit';

interface BarbershopState {
    barberId: number,
    serviceId: number,
    appointment_time: string | null,
}

const initialState: BarbershopState = {
    barberId: 0,
    serviceId: 0,
    appointment_time: null
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
        }
    }
})


export const { selectNewBarber, selectNewService, selectNewAppointmentTime } = barbershopSlice.actions


export default barbershopSlice.reducer