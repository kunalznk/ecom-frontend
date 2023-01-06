import { Typography } from "@mui/material"

const SubText =  (props: any) => {
    return <Typography  
    sx={{
        fontFamily :"Montserrat",
        fontWeight: 700,
        fontSize:"40px",
        lineHeight:"50px",
        textAlign: "center",
        letterSpacing: "0.2px",
        color: "#252B42"
    }}
    variant="body"
    {...props}
    />
}

export default SubText;