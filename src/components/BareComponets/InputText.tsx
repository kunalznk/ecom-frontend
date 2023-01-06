import { InputAdornment, TextField } from "@mui/material";
import Paragraph from "./Paragraph";

const InputText = (props: any) => {
  return (
    <TextField
      sx={{
        width: "450px",
        height: "50px",
        left: "10px",
        right: "10px",
        top: "10px",
        borderRadius: "5px",
      }}
      label={<Paragraph>{props.inputLabel}</Paragraph>}
      type={props.inputType}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <props.icon color="primary" />
          </InputAdornment>
        ),
      }}
      helperText={props.helpertext}
      {...props}
    />
  );
};

export default InputText;