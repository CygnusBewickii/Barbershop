import {Box, Chip, Grid} from "@mui/material";

function CalendarItem(props: any) {
    return (
        <Grid item xs={4}>
            <Chip variant={"outlined"} sx={{width: 1, height: 40}} label={props.time_slot.time}/>
        </Grid>
    )
}

export default CalendarItem;