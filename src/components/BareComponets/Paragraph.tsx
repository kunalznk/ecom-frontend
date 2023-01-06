import { Typography } from "@mui/material"

const Paragraph =  (props: any) => {
    return <Typography  
    sx={{
        fontFamily :"Montserrat",
        fontWeight: 400,
        fontSize:"14px",
        lineHeight:"20px",
        textAlign: "center",
        letterSpacing: "0.2px",
        color: "#737373",
        ...props.sx
    }}
    variant="h2"
    {...props}
    />
}

export default Paragraph;