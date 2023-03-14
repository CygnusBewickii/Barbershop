import {Chip, Grid} from "@mui/material";
import {useAppSelector} from "../hooks";
import {useDispatch} from "react-redux";
import {selectNewAppointmentTime} from "../features/barber/barbershopSlice";

function CalendarItem(props: any) {
    const appointmentTime = useAppSelector((state) => state.barbershop.appointmentTime)
    const dispatch = useDispatch()
    return (
        <Grid item xs={4}>
            <Chip clickable={false} onClick={() => {dispatch(selectNewAppointmentTime(props.timeSlot.time))}} variant={"outlined"}
                  sx={{
                      width: 1,
                      height: 40,
                      bgcolor: appointmentTime == props.timeSlot.time ? 'black' : null,
                      color: appointmentTime == props.timeSlot.time ? 'white' : null,
                      transitionDuration: '0.5s',
            }}
                  label={props.timeSlot.time}/>
        </Grid>
    )
}

export default CalendarItem;