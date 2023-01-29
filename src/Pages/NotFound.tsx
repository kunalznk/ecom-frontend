import { Button, Card, Container, Grid, TextField, Typography } from "@mui/material";
import BackgroundImage from "../images/backgroundImage.png"
import MailIcon from '@mui/icons-material/Mail';

const NotFound = () => {
    return <Container maxWidth="xl">
        <Grid container justifyContent="center" alignItems="center" minHeight="100vh">
        <Grid item container flexDirection="column" justifyContent="center" alignItems="center" gap="20px">
        <Grid item><Typography variant="h4"  style={{ fontSize: "100px" }}>404</Typography></Grid>
            <Grid item><Typography variant="h4" style={{ fontSize: "30px" }}>OOPS! THAT PAGE CAN'T BE FOUND</Typography></Grid>
            <Grid item><Typography variant="h4" style={{ fontSize: "20px" , maxWidth:"450px"}}>Unfortunately, this page does not exist. We apologize and give a 15% discount on any product.</Typography>
            </Grid>
            <Grid item><Button variant="contained">To Shopping</Button>
            </Grid>
        </Grid>
        </Grid>
        
    </Container>
}

export default NotFound;