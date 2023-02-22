import {Button, Stack} from "@mui/material";
import axios from "axios";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import BarberCard from "../components/BarberCard";
import {useAppSelector} from "../hooks";
import {Link} from "react-router-dom";

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

    const [barberList, setBarberList] = useState<barber[]>();
    const [selectedBarber, setSelectedBarber] = useState<number>();
    const barberId = useAppSelector((state) => state.barber.barberId)

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
            <div>{barberList?.map((barber) => {
                return <BarberCard barber={barber} key={barber.id}/>
            })}</div>
            { barberId != 0 &&
                <Link to={'/services'}>
                    <Button variant="contained" sx={{
                        bgcolor: 'black',
                        mt:1,
                        width: 1,
                        '&:hover': {
                            bgcolor: 'black'
                        }
                    }}>Выбрать барбера</Button>
                </Link>
            }
        </Stack>
    )
}

export default Barbers;