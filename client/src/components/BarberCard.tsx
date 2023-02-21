import {Avatar, Box, Modal, Stack, Typography} from "@mui/material";
import { useAppSelector, useAppDispatch } from '../hooks'
import {selectNewBarber} from "../features/barber/barberSlice";
import InfoIcon from '@mui/icons-material/Info';
import {useState} from "react";

function BarberCard(props : any) {
    const barberId = useAppSelector((state) => state.barber.barberId)
    const dispatch = useAppDispatch()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return(
        <Box onClick={() => dispatch(selectNewBarber(props.barber.id))}  sx={{
            border: barberId == props.barber.id ? 1 : 'none',
            borderRadius: 2,
            borderColor: 'black',
            height: 90,
            bgcolor: 'white',
            paddingX: 2
        }}>
            <Stack direction="row" alignItems="center" alignContent="center" justifyContent="space-between" sx={{
                height: 1
            }}>
                <Stack direction="row" sx={{
                    width: '15%'
                }}>
                    <Avatar src={`http://127.0.0.1:8000/${props.barber.image_path}`} sx={{
                        width: 60,
                        height: 60
                    }}/>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: 20
                    }}>
                        <Typography variant={"body1"} sx={{
                            fontWeight: 'bold',
                            fontSize: 22
                        }}>{props.barber.name}</Typography>
                    </div>
                </Stack>
                <div onClick={() => setIsOpen(true)}>
                    <InfoIcon fontSize={"large"}/>
                </div>
            </Stack>
            <Modal open={isOpen} onClose={ () => {setIsOpen(false)}}>
                <Box sx={{
                    width: '50%',
                    height: 120,
                    bgcolor: 'white'
                }}>[</Box>
            </Modal>
        </Box>
    )
}

export default BarberCard;