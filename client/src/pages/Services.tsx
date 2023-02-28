import {useAppDispatch, useAppSelector} from "../hooks";
import {Button, Stack} from "@mui/material";
import axios from "axios";
import {useEffect, useState} from "react";
import ServiceCard from "../components/ServiceCard";
import {Link} from "react-router-dom";
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
    const dispatch = useAppDispatch()
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
                return <ServiceCard service={service}/>
            })}
            <SubmitButton id={serviceId} text={'выбрать услугу'}/>
        </Stack>
    
    )
}

export default Services;