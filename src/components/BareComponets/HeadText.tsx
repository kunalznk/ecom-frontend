import { Typography } from "@mui/material"

const HeaderText =  (props: any) => {
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
    variant="h2"
    {...props}
    />
}

export default HeaderText;