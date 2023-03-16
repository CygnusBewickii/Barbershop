import {useNavigate} from "react-router-dom";

function redirectToBarberPage(barberId: number | null) {
    const navigate = useNavigate();
    if (barberId == null) {
        console.log('barberId == null')
        navigate('/barbers')
    }
}

export default redirectToBarberPage;