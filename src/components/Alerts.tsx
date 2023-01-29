import { Alert as MuiAlert, AlertProps, AlertTitle, Snackbar, Typography, Stack, Button, Box, AlertColor } from "@mui/material";
import { forwardRef, useEffect, useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { appActions } from '../store/appSlice';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Alerts = (props: {open: boolean ,  severity: AlertColor , message: string}) => {

    const [open, setOpen] = useState(props.open);
    const dispatch = useAppDispatch();
    
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
        dispatch(appActions.resetError())

    };
    return <>
    <Snackbar open={open} autoHideDuration={60000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Alert onClose={handleClose} severity={props.severity} sx={{ width: '100%' }}>
            <Typography  sx={{  fontSize:"20px" , lineHeight:"normal"}}>{props.message}</Typography>
        </Alert>
      </Snackbar>
      </>
}

export default Alerts;