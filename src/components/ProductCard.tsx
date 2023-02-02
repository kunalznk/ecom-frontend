import { Card, CardContent, CardHeader, CardMedia, Grid, Rating, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
const ProductCard = () => {
    return <>
        <Grid item component={Card} elevation={6}>
            <Grid container flexDirection="column" gap="10px"  padding="10px">
                <Grid item>
                    <CardMedia
                    component="img"
                    src="https://images.pexels.com/photos/1292770/pexels-photo-1292770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    style={{width: "348px" , height: "300px", objectFit: "cover"}}
                    />
                </Grid>
                <Grid item container flexDirection="column" component={CardContent}>
                         <Grid item container flexDirection="column" gap="10px">
                        <Grid item container justifyContent="space-between" alignItems="center">
            <Grid item>
            <Typography variant="subtitle2" >English Department</Typography>
            </Grid>
            <Grid item container gap="5px" width="50px" height="20px"  justifyContent="center"  sx={{backgroundColor:"black", borderRadius:"10px"}}>
                <StarIcon sx={{  color: "#FFCE31",fontSize:"16px", marginTop:"1px" }} />
            <Typography color="white" mt="3px" fontWeight={600}>4.6</Typography>
            </Grid>
                        </Grid>
                        <Grid item>
            <Typography variant="h5">Graphic Design</Typography>

                        </Grid>
                        <Grid item> 
            <Typography variant="body1" maxWidth="280px">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</Typography>

                        </Grid>
            <Grid item container justifyContent="flex-start" alignItems="center" gap="4px">
            <Grid item  sx={{ borderRadius:"10px"}}>
                <ArrowDownwardIcon sx={{  color: "#737373",fontSize:"16px", marginTop:"1px" }} />
            </Grid>
            <Grid item>
            <Typography variant="h6" color="#737373">15 Sales</Typography>
            </Grid>
            
            </Grid>
            <Grid item container justifyContent="flex-start" alignItems="center" gap="4px">
            <Grid item>
            <Typography variant="subtitle1" color="#737373">$16.48</Typography>
            </Grid>
            <Grid item>
            <Typography variant="h6" color="#737373">6.04</Typography>
            </Grid>
             </Grid>
            </Grid>
            </Grid>
            </Grid>
               
        </Grid>
    </>
}

export default ProductCard;

{/* <Grid item flexGrow={1}>
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
    </Grid> */}