import {Box, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import IndexButton from "../components/IndexButton";
function Index() {
    return(
        <Stack spacing={1} >
            <Link to={'/barbers'} style={{textDecoration: 'none'}}>
                <IndexButton text='Онлайн-запись'/>
            </Link>
            <a href="tel:89040646822" style={{textDecoration: 'none'}}>
                <IndexButton text='Связаться по телефону'/>
            </a>
            <a href="https://t.me/cygnus_bewickii" style={{textDecoration: 'none'}}>
                <IndexButton text='Связаться в телеграмм'/>
            </a>
            
        </Stack>
    )
}

export default Index;