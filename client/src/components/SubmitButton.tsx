import {Link} from "react-router-dom";
import {Button} from "@mui/material";

function SubmitButton(props: any) {
    return(
        <div>
            {props.id != 0 &&
                <Link to={'/services'}>
                    <Button variant="contained" sx={{
                        bgcolor: 'black',
                        width: 1,
                        '&:hover': {
                            bgcolor: 'black'
                        }
                    }}>{props.text}</Button>
                </Link>
            }
        </div>
    )
}

export default SubmitButton;