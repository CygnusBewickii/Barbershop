import { createSlice } from '@reduxjs/toolkit';

interface BarbershopState {
    barberId: number,
    serviceId: number
}

const initialState: BarbershopState = {
    barberId: 0,
    serviceId: 0
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
        }
    }
})


export const { selectNewBarber, selectNewService } = barbershopSlice.actions


export default barbershopSlice.reducer