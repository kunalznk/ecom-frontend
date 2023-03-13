import { Alert as MuiAlert, AlertProps, AlertTitle, Snackbar, Typography, Stack, Button, Box } from "@mui/material";
import { forwardRef, useEffect, useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { appActions } from '../store/appSlice';
import { connect, MapStateToProps } from "react-redux";

type AlertColor = 'success' | 'info' | 'warning' | 'error';

const Alerts = (props: {open: boolean ,  severity: AlertColor , message: string}) => {

    const alert = {
        success: ["rgba(62, 189, 97,0.2)", "#3ebd61", "fas fa-solid fa-check check"],
        info: ["rgba(0, 108, 227,0.2)", "#006CE3" , "fas fa-solid fa-info check"],
        warning: ["rgba(239, 148, 0, 0.2)", "#EF9400", "fas fa-solid fa-exclamation check"],
        error: ["rgba(236, 77, 43, 0.2)", "#EC4D2B" , "fas fa-solid fa-exclamation check"]
    }
    const dispatch = useAppDispatch();
    
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(appActions.resetError())
    };
    
    useEffect(() => {
        if(props.open) {
            setTimeout(() => {
                dispatch(appActions.resetError())
            }, 10000)
        }
        return () => {console.log("timeout removed")}
    }, [props.open])

    return <div className={props.open ? "toast active" : "toast"} style={{backgroundColor: alert[props.severity][0]}}>
            <div className="toast-content">
            {props.open && <i className={alert[props.severity][2]} style={{backgroundColor: alert[props.severity][1]}} />}
            <div className="message" style={{color:"#333C48"}}>
                {/* <span className="product-o__name">Success</span> */}
                <span className="product-o__name">{props.message}</span>
            </div>
            </div>
        <i className="btn new-l__dismiss fas fa-times fa-solid fa-xmark close" style={{color:"red"}} onClick={(e) => handleClose(e)}/>
        <div className="progress active" />
        </div>
      
}

function mapStateToProps (state: any , ownState: any) {
    const { error }  = state?.entities?.app;
    const open = Boolean(error.message);
    const severity = error.severity;
    const message = error.message;
    return { open , message , severity}
}
export default connect(mapStateToProps)(Alerts);