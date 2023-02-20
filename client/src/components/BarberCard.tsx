import {Box} from "@mui/material";
import {barber} from "../pages/Barbers";
import { useAppSelector, useAppDispatch } from '../hooks'
function BarberCard(props : any) {
    const barber = useAppSelector((state) => state.barber)
    const dispatch = useAppDispatch()
    return(
        <Box  sx={{
            border: 1,
            borderRadius: 2,
            borderColor: 'black',
            height: 70,
            bgcolor: 'white',
        }}>
            {barber.name}
        </Box>
    )
}

export default BarberCard;