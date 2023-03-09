import {Box, Chip, Grid} from "@mui/material";
import {useAppSelector} from "../hooks";

function CalendarItem(props: any) {
    const appointment_time = useAppSelector((state) => state.barbershop.appointment_time)
    return (
        <Grid item xs={4}>
            <Chip variant={"outlined"} sx={{width: 1, height: 40}} label={props.time_slot.time}/>
        </Grid>
    )
}

export default CalendarItem;