import { Button, Divider, Rating ,Container, Grid, Tab, Tabs, Typography } from "@mui/material";
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import Carousel from "react-material-ui-carousel";
import { useAppSelector } from "../store/hooks";
import { Link } from "react-router-dom";


const Product = () => {

    const  product  = useAppSelector(state => state.entities.product.products[0]);
    return <>
            <Grid item container justifyContent="center" padding="2%" gap="5%" >
                <Container maxWidth="lg">
                    <Grid container justifyContent="space-evenly">
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Carousel
                    // IndicatorIcon={<Grid container gap="5px">{ product.images?.map((image) => <Grid item component="img" src={image} sx={{height:"100px", width:"100px"}} />)} </Grid>}
                    >
                        {
                            product?.images?.map( (image) =>  <img 
                            src={image}
                            style={{ maxHeight:"600px" ,minWidth: "318px" ,minHeight: "227px", objectFit: "contain", aspectRatio:" 1/1"}}
                            />)
                        }
                    </Carousel>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Grid container flexDirection="column" gap="30px">
        <Grid item>
        <Typography variant="h5">{product.title}</Typography>
        <Grid container alignItems="flex-start" gap="10px">
            <Rating name="read-only" value={3} readOnly sx={{height: "22px"}}/>
            <Typography variant="h6" color="#737373">{product.reviews.total_reviews} reviews</Typography>
        </Grid>
        </Grid>
        <Grid item>
        <Typography variant="h3">{product.price.symbol +" "+product.price.savings_percent}</Typography>
        <Grid container alignItems="flex-start" gap="10px">
            <Typography variant="h6" color="#737373">Availability :</Typography>
            <Typography variant="h6" color="#23A6F0">{product.item_available ? "In Stock" : "Out of Stock"}</Typography>
        </Grid>
        </Grid>
        <Grid item>
            {product.feature_bullets?.map((feature) => <Typography variant="body2" color="#858585" sx={{maxWidth:"464px"}}>
        {feature}
        </Typography>)}
        
       
        </Grid>
        <Divider variant="fullWidth"/>
        <Grid container alignItems="flex-start" gap="10px">
            <CircleTwoToneIcon color="primary"/>
            <CircleTwoToneIcon color="success"/>
            <CircleTwoToneIcon color="error"/>
            <CircleTwoToneIcon color="info"/>
        </Grid>
        <Grid container alignItems="flex-start" gap="10px">
        <Link to="/cart" style={{textDecoration:"none"}}><Button variant="contained" sx={{width: "160px", height:"44px"}}>Buy Now</Button></Link>
        <Link to="/">
            <FavoriteBorderTwoToneIcon color="secondary" sx={{height:"44px", fontSize:"35px"}}/>
        </Link>
        <Link to="/">
            <ShoppingCartTwoToneIcon color="secondary" sx={{height:"44px", fontSize:"35px"}}/>
        </Link>
        <Link to="/">
            <VisibilityTwoToneIcon color="secondary" sx={{height:"44px", fontSize:"35px"}}/>
        </Link>
        </Grid>
        </Grid>
            </Grid>
            </Grid>
                </Container>
           
    </Grid>
    <Container maxWidth="xl" sx={{ padding: "20px"}}>
        <Grid container flexDirection="column" gap="50px">
            <Grid item container>
                <Grid container justifyContent="center" alignItems="center" gap="2%">
                    <Tabs>
                    <Tab icon={<Typography variant="subtitle2" color="grey">Additional Information</Typography>} /> 
                    </Tabs>
                    </Grid>
            </Grid>
        
            <Grid item container  justifyContent="center" gap="4%">
            <Grid item>
            <img 
        src={product.main_image}
         style={{maxWidth: "332px" , maxHeight: "372px" ,minWidth: "321px", minHeight:"271px" }}
                        />
            </Grid>
                
                <Grid container flexDirection="column" gap="20px" sx={{maxWidth: "332px"}}>
                    <Typography variant="h5">Descripation</Typography>
                    <Typography variant="body1" sx={{lineHeight: "20px"}}>{product.description}</Typography>
            </Grid>
                
                <Grid container flexDirection="column" gap="20px" sx={{maxWidth: "332px"}}>
                    <Typography variant="h5" component="ul">Feature Highlights</Typography>
                    { product.feature_bullets?.map((feature) => <Typography  variant="body1" component="li">{feature}</Typography>) }
                    </Grid>
            </Grid>
            
        </Grid>
       
        
    </Container>
    </>
}

export default Product;