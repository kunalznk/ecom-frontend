import { Grid, InputLabel, TextField, TextFieldProps, Typography } from "@mui/material";


const FormInput = (
    props:  TextFieldProps & { 
    inputLabel: string,
    register?: any,
    autoFocus ?: boolean,
    name : string,
    required ?: boolean
    error : boolean,
    placeholder : string
    fullWidth ?: boolean,
    errormsg: string | null | undefined
}
) => {
    const { register, name } = props;
    return <>
        <Grid container flexDirection="column" gap="0.4rem" minWidth="260px">
            <Grid item>
                <InputLabel>
                    <Typography variant="subtitle1">{props.inputLabel}</Typography>
                </InputLabel>
            </Grid>
        <Grid item>
            <TextField
                { ...register(name) }
                {...props}
                fullWidth
                sx={{  gap:"0.2rem"   }}
                FormHelperTextProps={{ variant:"standard"}}  
                inputProps={{ sx: { 
                    height:"10px",
                    fontSize: "16px"
                }}}
                helperText={<Typography variant="subtitle1" style={{fontSize:"13px" , textAlign:"left", minHeight:"15px" , maxWidth: "260px" }}>{props.errormsg}</Typography>}
            />
         </Grid>
    </Grid>
         
    </>
}

export default FormInput;