import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Container, Grid, Typography, Box} from "@mui/material";

const Footer = () => {
    return <Box sx={{background: "#2A7CC7", padding:"2%"}}>
        <Container maxWidth="xl"> 
                <Grid container alignItems="flex-start" justifyContent="space-around">
                
                <Grid item>
                <Grid container flexDirection="column" alignItems="flex-start" gap="25px">
                <Typography variant="h3" color="white">Get In Touch</Typography>
                <Typography variant="body1" color="white">The quick fox jump over the lazy dog</Typography>
                <Grid container gap="25px" alignItems="center" justifyContent="flex-start">
                <TwitterIcon sx={{color: "white"}}/>
                <GitHubIcon sx={{color: "white"}} />
                <LinkedInIcon sx={{color: "white"}}/>
                </Grid>
                </Grid>
                </Grid>

                <Grid item>
                <Grid container flexDirection="column" alignItems="flex-start" gap="10px">
                <Typography variant="h3" color="white">Company Info</Typography>
            <Grid container flexDirection="column" alignItems="flex-start" gap="10px">
                <Typography variant="subtitle2" color="white">About Us</Typography>
            <Typography variant="subtitle2" color="white">Carrier</Typography>
            <Typography variant="subtitle2" color="white">Blog</Typography>
            </Grid>
                </Grid>
                </Grid>  
                
                <Grid item>
                <Grid container flexDirection="column" alignItems="flex-start" gap="10px">
                    <Typography variant="h3" color="white">Company Info</Typography>
                <Grid container flexDirection="column" alignItems="flex-start" gap="10px">
                    <Typography variant="subtitle2" color="white">About Us</Typography>
                <Typography variant="subtitle2" color="white">Carrier</Typography>
                <Typography variant="subtitle2" color="white">Blog</Typography>
                </Grid>
                </Grid>
                </Grid>

                </Grid>

                <Grid container justifyContent="center" alignItems="center">
                <Typography variant="h6" textAlign="center" color="white">Copyright Kunal Zanke ---</Typography>
                </Grid>

        </Container>
    </Box>

}

export default Footer; 