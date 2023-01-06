import { CardMedia } from "@mui/material";

const CustomImage = (props: any) => {
    return <CardMedia
    component="img"
    sx={{ padding: "1em", objectFit: "contain" , maxHeight: "405px" , maxWidth: "506px" , minHeight: "427px" , minWidth: "348px" }}
    {...props}
    />
}
export default CustomImage;