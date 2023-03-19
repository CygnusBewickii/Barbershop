import {
    Box,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Stack,
    Typography
} from "@mui/material";
import {useState} from "react";
import {useAppDispatch, useAppSelector} from "../hooks";
import {selectNewService} from "../features/barber/barbershopSlice";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";

function serviceCard(props : any) {
    const serviceId = useAppSelector((state) => state.barbershop.serviceId)
    const dispatch = useAppDispatch()
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return(
        <Box onClick={() => dispatch(selectNewService(props.service.id))}  sx={{
            border: serviceId == props.service.id ? 1 : 'none',
            borderRadius: 2,
            borderColor: 'black',
            height: 90,
            bgcolor: 'white',
            paddingX: 2,
            marginBottom: 1,
        }}>
            <Stack direction="row" alignItems="center" alignContent="center" justifyContent="space-between" sx={{
                height: 1
            }}>
                <Stack direction="row" sx={{
                }}>
                    <Stack style={{
                        display: 'flex',
                        alignItems: 'start',
                        marginLeft: 20
                    }}>
                        <Box>
                            <Typography variant={"body1"} sx={{
                                fontSize: 18
                            }}>{props.service.name}</Typography>
                        </Box>
                        <Box>
                            <Typography variant={"body1"} sx={{
                                fontSize: 16,
                                fontWeight: 'bold'
                            }}>
                                {props.service.price}
                            </Typography>
                        </Box>
                    </Stack>
                </Stack>
                <div onClick={() => setIsOpen(true)}>
                    <InfoIcon fontSize={"large"} sx={{
                        '&:hover': {
                            cursor: 'pointer'
                        }
                    }}/>
                </div>
            </Stack>
            <Dialog open={isOpen} maxWidth={'sm'} fullWidth={true} onClose={ () => {setIsOpen(false)}}>
                <DialogTitle>
                    Описание специалиста
                </DialogTitle>
                <DialogContent sx={{height: 200}}>
                    <DialogContentText>
                        {props.service.description}
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{
                    position: 'absolute',
                    top: 10,
                    right: 10
                }}>
                    <CloseIcon onClick={() => {setIsOpen(false)}} sx={{
                        '&:hover': {
                            cursor: 'pointer'
                        }
                    }}/>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default serviceCard;