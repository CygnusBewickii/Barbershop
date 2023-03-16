import {TextField} from "@mui/material";
import {useAppSelector} from "../hooks";
import {useDispatch} from "react-redux";
import {selectNewClientPhone} from "../features/barber/barbershopSlice";

function PhoneNumberInput() {
    const clientPhone = useAppSelector(state => state.barbershop.clientPhone)
    const dispatch = useDispatch()

    return(
        <TextField name={'client-phone'} label={'Ваш номер телефона'} required
                   onChange={(event) => dispatch(selectNewClientPhone(event.target.value))}
                   defaultValue={clientPhone == null ? '+7' : clientPhone}
                   inputProps={{
            maxLength: 12,
        }}
        />
    )
}

export default PhoneNumberInput