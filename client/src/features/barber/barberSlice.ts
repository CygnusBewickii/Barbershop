import { createSlice } from '@reduxjs/toolkit';

interface BarberState {
    barberId: number,

}

const initialState: BarberState = {
    barberId: 0,
}
export const barberSlice = createSlice({
    name: 'barber',
    initialState,
    reducers: {
        selectNewBarber: (state, action) => {
            state.barberId = action.payload
        },
        selectNewService: (state, action) => {

        }
    }
})


export const { selectNewBarber } = barberSlice.actions


export default barberSlice.reducer