import {Box, Stack} from "@mui/material";
import { useAppSelector, useAppDispatch } from '../hooks'
import {selectNewBarber} from "../features/barber/barberSlice";
import InfoIcon from '@mui/icons-material/Info';

function BarberCard(props : any) {
    const barberId = useAppSelector((state) => state.barber.barberId)
    const dispatch = useAppDispatch()
    return(
        <Box onClick={() => dispatch(selectNewBarber(props.barber.id))}  sx={{
            border: barberId == props.barber.id ? 1 : 'none',
            borderRadius: 2,
            borderColor: 'black',
            height: 70,
            bgcolor: 'white',
        }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <div>
                    <img src="" alt=""/>
                    <div>{props.barber.name}</div>
                </div>
                <div>
                    <InfoIcon fontSize={"large"}/>
                </div>
            </Stack>
        </Box>
    )
}

export default BarberCard;