import {CircularProgress} from "@mui/material";

function Loading(props: any) {
    return(
        <div>
            {props.isLoading && <div style={{display: 'flex', justifyContent: 'center'}}>
                <CircularProgress/>
            </div>}
        </div>
    )
}

export default Loading