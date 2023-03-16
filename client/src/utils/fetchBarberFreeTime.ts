import axios from "axios";
import {Dayjs} from "dayjs";

const fetchBarberFreeTime = async (barberId: number|null, Date: Dayjs|null) => {
    const formatDate = Date?.format('YYYY-MM-DD');
    const response = await axios.get(`http://127.0.0.1:8000/api/barbers/${barberId}/getFreeTime/${formatDate}`)
        .then(response => response.data[0]);
    return response
}

export default fetchBarberFreeTime