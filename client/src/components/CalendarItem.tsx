import {Chip, Grid} from "@mui/material";
import {useAppSelector} from "../hooks";
import {useDispatch} from "react-redux";
import {selectNewAppointmentTime} from "../features/barber/barbershopSlice";

function CalendarItem(props: any) {
    const appointment_time = useAppSelector((state) => state.barbershop.appointment_time)
    const dispatch = useDispatch()
    return (
        <Grid item xs={4}>
            <Chip clickable={false} onClick={() => {dispatch(selectNewAppointmentTime(props.time_slot.time))}} variant={"outlined"}
                  sx={{
                      width: 1,
                      height: 40,
                      bgcolor: appointment_time == props.time_slot.time ? 'black' : null,
                      color: appointment_time == props.time_slot.time ? 'white' : null,
                      transitionDuration: '0.5s',
            }}
                  label={props.time_slot.time}/>
        </Grid>
    )
}

export default CalendarItem;