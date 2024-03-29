import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

function useRedirectOnReload(barberId: number | null, navigate: Function) {
    useEffect(() => {
        if (barberId == null) {
            return navigate('/')
        }
        return
    }, [])
}

export default useRedirectOnReload;