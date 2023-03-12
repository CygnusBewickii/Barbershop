import {TextField} from "@mui/material";
import {useAppSelector} from "../hooks";
import {useDispatch} from "react-redux";
import {selectNewClientPhone} from "../features/barber/barbershopSlice";

function PhoneNumberInput() {
    const client_phone = useAppSelector(state => state.barbershop.client_phone)
    const dispatch = useDispatch()

    return(
        <TextField name={'client-phone'} label={'Ваш номер телефона'} required
                   onChange={(event) => dispatch(selectNewClientPhone(event.target.value))}
                   defaultValue={client_phone == null ? '+7' : client_phone}
                   inputProps={{
            maxLength: 12,
        }}
        />
    )
}

export default PhoneNumberInput