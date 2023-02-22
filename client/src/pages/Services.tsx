import {useAppDispatch, useAppSelector} from "../hooks";

function Services() {
    const barberId = useAppSelector((state) => state.barber.barberId)
    const dispatch = useAppDispatch()
    return(
        <div>{barberId}</div>
    )
}

export default Services;