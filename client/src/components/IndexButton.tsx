import {Box, Typography} from "@mui/material";

interface ButtonProps {
    text: String
}
function IndexButton(props: ButtonProps) {
    return(
        <Box sx={{
            width: 1,
            height: 45,
            bgcolor: 'black',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>

            <Typography variant='body1' sx={{textDecoration: 'none'}}>{props.text}</Typography>
        </Box>
    )
}

export default IndexButton