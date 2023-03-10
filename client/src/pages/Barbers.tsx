import {Stack} from "@mui/material";
import axios from "axios";
import {useEffect, useState} from "react";
import BarberCard from "../components/BarberCard";
import {useAppSelector} from "../hooks";
import SubmitButton from "../components/SubmitButton";
import Loading from "../components/Loading";

export interface barber {
    id: number
    name: String,
    age: number,
    description: string,
    image_path: string,
    created_at: Date,
    updated_at: Date,
}
function Barbers() {
    const [isLoading, setIsLoading] = useState<boolean>();
    const [barberList, setBarberList] = useState<barber[]>();
    const barberId = useAppSelector((state) => state.barbershop.barberId)

    const fetchBarbers = async () => {
        setIsLoading(true)
        const response : Array<barber> = await axios.get('http://localhost:8000/api/barbers')
            .then(response => response.data);
        setBarberList(response);
        setIsLoading(false)
    }
    useEffect(() => {fetchBarbers()}, []);

    return(
        <Stack>
            <Loading isLoading={isLoading}/>
            <div>{barberList?.map((barber) => {
                return <BarberCard barber={barber} key={barber.id}/>
            })}</div>
            <SubmitButton data={barberId} url={'/services'} text={'выбрать барбера'}/>
        </Stack>
    )
}

export default Barbers;