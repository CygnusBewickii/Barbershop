import { createSlice } from '@reduxjs/toolkit';

interface BarberState {
    id: number,
    name: string,
    age: number,
    description: string,
    created_at: Date,
    updated_at: Date
}

const initialState: BarberState = {
    id: 0,
    name: '',
    age: 0,
    description: '',
    created_at: new Date(),
    updated_at: new Date()

}
export const barberSlice = createSlice({
    name: 'barber',
    initialState,
    reducers: {
        selectNewBarber: (state, action) => {
            state = action.payload
        }
    }
})


export const { selectNewBarber } = barberSlice.actions


export default barberSlice.reducer