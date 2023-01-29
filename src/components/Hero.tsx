import { Button, CardMedia, Container, Grid, Typography } from "@mui/material";
import HeroImage from "../images/hero.svg"

const Hero = (props: any) => {
    return <Container maxWidth="xl" sx={{ background: "url(https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80)", backgroundRepeat: "no-repeat" ,backgroundPosition:"center" , backgroundSize: "cover" }} >
        <Grid  container justifyContent="flex-start" alignItems="center" flexDirection="row" {...props} marginLeft="10%">
            <Grid item minHeight="380px">
                <Grid container flexDirection="column" justifyContent="center" alignItems="flex-start" gap="30px">
                    <Typography variant="h5" color="white">Summer 2022</Typography>
                    <Typography variant="h1"  color="white">New Collection</Typography>
                    <Typography variant="h4" maxWidth="376px"  color="white">we know how large obejct will act out things on small scale</Typography>
                    <Button sx={{maxHeight:"62px" , maxWidth: "221px"}} variant="contained" >SHOP NOW</Button>
                </Grid>
            </Grid>
            
        </Grid>
    </Container>
}

export default Hero;