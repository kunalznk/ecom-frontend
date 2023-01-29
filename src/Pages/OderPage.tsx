import { Box, Button, ButtonGroup, Card, CardContent, CardHeader, CardMedia, Container, Divider, Grid, InputLabel, Paper, Rating, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import BackgroundImage from "../images/backgroundImage.png"
const OderPage = () => {
    return <Container maxWidth="xl" component={Paper} >
        <Grid container maxWidth="xl" flexDirection="column" justifyContent="flex-start" >
    <Typography variant="h2" textAlign="center">Product Ordered</Typography><br />
    <Typography variant="subtitle2" textAlign="center">Go To Products</Typography>

    {[1,3,4].map(() => <><Grid item >
        <Grid item container display="flex" justifyContent="space-around" alignItems="center" padding="10px">  
    <Grid item>
        <CardMedia component="img" src="https://i.picsum.photos/id/921/239/280.jpg?hmac=-XDHez5XM3ErDaDgnsqGICQsyyVtlfR2ivdZa1NmSTE" 
        sx={{ objectFit: "contain", maxHeight: "404px", maxWidth: "328px", borderRadius:"10px" }}/>
       </Grid>
        <Grid item>
        <CardContent >
                    <Grid container flexDirection="column" alignItems="center" gap="20px">
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
        </Grid>
        
    <Grid item>
    <Typography variant="h6">Quantity</Typography>
    <ButtonGroup size="medium">
        <Button variant="contained">+</Button>
        {1 && <Button disabled>2</Button>}
        {1 && <Button variant="contained">-</Button>}
      </ButtonGroup>

    </Grid>
   
        </Grid>
        </Grid>
        <Divider variant="middle"/>
        </>
        )}
        
    </Grid>
     
    </Container>
}

export default OderPage;