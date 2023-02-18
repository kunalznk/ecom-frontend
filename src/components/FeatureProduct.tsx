import { Typography, Grid, Container } from "@mui/material";
import ProductCard from "./ProductCard";
import ContentCard from './ContentCard';
import { useAppSelector } from "../store/hooks";

const FeatureProduct = () => {

    const  {products}  = useAppSelector(state => state.entities.product);
    return <Container maxWidth="lg">
        <Grid container flexDirection="column" alignItems="center" gap="30px">
            <Grid item>
                <Grid container flexDirection="column" alignItems="center" gap="20px">
                    <Typography variant="h3">Featured Products</Typography>
                    {/* <Typography variant="h3">Bestseller Products</Typography> */}
                    <Typography variant="body1">Problems trying to resolve conflict between</Typography>
                </Grid>
            </Grid>
            <Grid item container  justifyContent="space-evenly" gap="20px">
                {products.slice(0,4).map((product) => <ContentCard product={product}/>)}
            </Grid>
        </Grid>



    </Container>
}

export default FeatureProduct;