import { Card, CardContent, CardHeader, CardMedia, Grid, Rating, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

const ProductCard = () => {
    return <Grid item flexGrow={1}>
    <Card elevation={8} style={{margin:"4%"}}>
        <CardMedia component="img" src="https://i.picsum.photos/id/921/239/280.jpg?hmac=-XDHez5XM3ErDaDgnsqGICQsyyVtlfR2ivdZa1NmSTE" 
        sx={{ objectFit: "contain" }}/>
        <CardContent>
            <Grid container flexDirection="column" gap="10px">
            <Grid item container justifyContent="space-between" alignItems="center">
            <Grid item>
            <Typography variant="subtitle2" >English Department</Typography>
            </Grid>
            <Grid item container gap="5px" width="50px" height="20px"  justifyContent="center"  sx={{backgroundColor:"black", borderRadius:"10px"}}><StarIcon sx={{  color: "#FFCE31",fontSize:"16px", marginTop:"1px" }} /><Typography color="white" mt="3px" fontWeight={600}>4.6</Typography></Grid>
            </Grid>
            <Typography variant="h5">Graphic Design</Typography>
            <Typography variant="body1" maxWidth="280px">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</Typography>
            <Typography variant="h6" color="#737373">price</Typography>
            </Grid>
        </CardContent>
    </Card>
    </Grid>
}

export default ProductCard;