import {useAppDispatch, useAppSelector} from "../hooks";
import {Stack} from "@mui/material";
import axios from "axios";
import {useEffect, useState} from "react";
import ServiceCard from "../components/ServiceCard";

interface Service {
    id: number,
    name: string,
    price: number,
    description: string
}
function Services() {
    const barberId = useAppSelector((state) => state.barber.barberId)
    const dispatch = useAppDispatch()
    const [services, setServices] = useState<Service[]>();
    const fetchServices = async () => {
        const response = await axios.get(`http://localhost:8000/api/services/barber/${barberId}`)
            .then(response => response.data)
        setServices(response)
    }

    useEffect(() => {fetchServices()}, [])

    return(
        <Stack>
            {services && services.map((service) => {
                return <ServiceCard service={service}/>
            })}
        </Stack>
    )
}

export default Services;