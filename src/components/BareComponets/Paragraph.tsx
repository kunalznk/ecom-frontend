import { Typography, TypographyTypeMap } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { ReactElement } from "react";

const Paragraph =  (props: any) : ReactElement<OverridableComponent<TypographyTypeMap<{}, "span">>> => {
    const style = props.sx;
    // delete props.sx;
    console.log(props)
    return <Typography  
    sx={{
        fontFamily :"Montserrat",
        fontWeight: 400,
        fontSize:"14px",
        lineHeight:"20px",
        textAlign: "center",
        letterSpacing: "0.2px",
        color: "#737373",
        ...style
    }}
    variant="h2"
    {...props}
    />
}

export default Paragraph;