import {Box, Button, TextField, Typography} from "@mui/material";
import {useState} from "react";

function PersonalData() {
    const [clientName, setClientName] = useState<string>();
    const [clientPhone, setClientPhone] = useState<string>();

     const handlePhoneNumberInput = (value: any) => {
        setClientPhone(value)
    }
    return(
        <Box sx={{
            bgcolor: 'white',
            borderRadius: 4,
            p: 3

        }}>
            <Box sx={{
                mb: 2
            }}>
                <Typography>
                    Введите ваши данные
                </Typography>
            </Box>
            <Box className='client-form'>
                <Box sx={{
                    mb: 1.5
                }}>
                    <TextField required id={"client-name"} label={"Ваше имя"} onChange={(event) => {setClientName(event.target.value)}} />
                </Box>
                <Box sx={{
                    mb: 2
                }}>
                    <TextField type='tel' required id={"client-phone"} label={"Ваш номер телефона"} onChange={(event) => {setClientPhone(event.target.value)}}/>
                </Box>
                <Button type='submit' variant='contained' sx={{
                    bgcolor: 'black',
                    '&:hover': {
                        bgcolor: 'black'
                    }
                }}>Записаться</Button>
            </Box>
        </Box>
    )
}

export default PersonalData;