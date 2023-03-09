import { useAppSelector} from "../hooks";
import { Stack } from "@mui/material";
import axios from "axios";
import {useEffect, useState} from "react";
import ServiceCard from "../components/ServiceCard";
import SubmitButton from "../components/SubmitButton";
import Loading from "../components/Loading";

interface Service {
    id: number,
    name: string,
    price: number,
    description: string
}
function Services() {
    const [isLoading, setIsLoading] = useState<boolean>()
    const barberId = useAppSelector((state) => state.barbershop.barberId)
    const serviceId = useAppSelector((state) => state.barbershop.serviceId)
    const [services, setServices] = useState<Service[]>();
    const fetchServices = async () => {
        setIsLoading(true)
        const response = await axios.get(`http://localhost:8000/api/services/barber/${barberId}`)
            .then(response => response.data)
        setServices(response)
        setIsLoading(false)
    }

    useEffect(() => {fetchServices()}, [])

    return(
        <Stack>
            <Loading isLoading={isLoading}/>
            {services && services.map((service) => {
                return <ServiceCard service={service} key={service.id}/>
            })}
            <SubmitButton data={serviceId} url={'/appointment'} text={'выбрать услугу'}/>
        </Stack>
    
    )
}

export default Services;