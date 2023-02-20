import {Stack} from "@mui/material";
import axios from "axios";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import BarberCard from "../components/BarberCard";

export interface barber {
    id: number
    name: String,
    age: number,
    description: string,
    created_at: Date,
    updated_at: Date,
}
function Barbers() {

    const [barberList, setBarberList] = useState<barber[]>();
    const [selectedBarber, setSelectedBarber] = useState<number>();
    const fetchBarbers = async () => {
        const response : Array<barber> = await axios.get('http://localhost:8000/api/barbers').then(response => response.data);
        setBarberList(response);
    }
    useEffect(() => {fetchBarbers()}, []);

    const selectBarber = (id : number) => {
        setSelectedBarber(id)
    }

    return(
        <Stack>
            {selectedBarber}
            <div>{barberList?.map((barber) => {
                return <BarberCard barber={barber} key={barber.id}/>
            })}</div>
        </Stack>
    )
}

export default Barbers;