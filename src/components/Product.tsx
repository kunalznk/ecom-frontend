import { Button, Divider, Grid, Rating, Typography } from "@mui/material";
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import Carousel from "react-material-ui-carousel";
import { Container } from "@mui/system";


const Product = () => {

    const productImages = [1,2,3,4]
    return <>
            <Grid item container justifyContent="center" padding="2%" gap="5%" >
                <Container maxWidth="lg">
                    <Grid container justifyContent="space-evenly">
                <Grid item>
                    <Carousel
                    sx={{ maxWidth:"600px" , maxHeight:"646px", minWidth: "348px" ,minHeight: "277px"}} 
                    >
                        {
                            productImages.map( () =>  <img 
                            src="https://images.pexels.com/photos/1292770/pexels-photo-1292770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            style={{maxWidth:"506px" , maxHeight:"450px" , minWidth: "318px" ,minHeight: "227px", objectFit: "contain"}}/>)
                        }
                    </Carousel>
            </Grid>
            <Grid item>
            <Grid container flexDirection="column" gap="30px">
        <Grid item>
        <Typography variant="h4">Floating Phone</Typography>
        <Grid container alignItems="flex-start" gap="10px">
            <Rating name="read-only" value={3} readOnly sx={{height: "22px"}}/>
            <Typography variant="h6" color="#737373">10 reviews</Typography>
        </Grid>
        </Grid>
        <Grid item>
        <Typography variant="h3">$1,393.33</Typography>
        <Grid container alignItems="flex-start" gap="10px">
            <Typography variant="h6" color="#737373">Availability :</Typography>
            <Typography variant="h6" color="#23A6F0">In Stock</Typography>
        </Grid>
        </Grid>
        <Grid item>
        <Typography variant="body1" color="#858585" sx={{maxWidth:"464px"}}>
        Met minim Mollie non desert Alamo est sit cliquey dolor 
        do met sent. RELIT official consequent door ENIM RELIT Mollie. 
        Excitation venial consequent sent nostrum met.
        </Typography>
       
        </Grid>
        <Divider variant="fullWidth"/>
        <Grid container alignItems="flex-start" gap="10px">
            <CircleTwoToneIcon color="primary"/>
            <CircleTwoToneIcon color="success"/>
            <CircleTwoToneIcon color="error"/>
            <CircleTwoToneIcon color="info"/>
        </Grid>
        <Grid container alignItems="flex-start" gap="10px">
        <Button variant="contained" sx={{width: "160px", height:"44px"}}>Select Options</Button>
        <FavoriteBorderTwoToneIcon color="secondary" sx={{height:"44px"}}/>
        <ShoppingCartTwoToneIcon color="secondary" sx={{height:"44px"}}/>
        <VisibilityTwoToneIcon color="secondary" sx={{height:"44px"}}/>
        </Grid>
        </Grid>
            </Grid>
            </Grid>
                </Container>
           
    </Grid>
    </>
}

export default Product;