import axios from "axios";
import {useAppSelector} from "../hooks";
import {useNavigate} from "react-router-dom";
import {Dayjs} from "dayjs";

interface clientInfo {
    barberId: number | null,
    serviceId: number | null,
    appointmentTime: string | null,
    appointmentDate: Dayjs | null,
    clientName: string | null,
    clientPhone: string | null
}
const createAppointment = async (clientInfo: clientInfo, navigate: Function) => {
    await axios.post('http://127.0.0.1:8000/api/appointments/createAppointment', {
        barberId: clientInfo.barberId,
        serviceId: clientInfo.serviceId,
        appointmentTime: clientInfo.appointmentTime,
        appointmentDate: clientInfo.appointmentDate?.format('YYYY-MM-DD'),
        clientName: clientInfo.clientName,
        clientPhone: clientInfo.clientPhone,
    }).catch(error => alert(error));
    return navigate("/appointment/success");
}

export default createAppointment;