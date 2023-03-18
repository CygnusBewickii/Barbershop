import {TextField} from "@mui/material";
import {useAppSelector} from "../hooks";
import {useDispatch} from "react-redux";
import {selectNewClientPhone} from "../features/barber/barbershopSlice";

function PhoneNumberInput(props: any) {
    const clientPhone = useAppSelector(state => state.barbershop.clientPhone)
    const dispatch = useDispatch()

    return(
        <TextField name={'client-phone'} label={'Ваш номер телефона'} required
                   error={props.isValidated != true && (clientPhone === null || clientPhone === "") }
                   onChange={(event) => dispatch(selectNewClientPhone(event.target.value))}
                   defaultValue={clientPhone == null ? '+7' : clientPhone}
                   inputProps={{
            maxLength: 12,
        }}
        />
    )
}

export default PhoneNumberInput