import { Typography, Grid, Container } from "@mui/material";
import ProductCard from "./ProductCard";

const FeatureProduct = () => {
    return <Container maxWidth="lg">
        <Grid container flexDirection="column" alignItems="center" gap="30px">
            <Grid item>
                <Grid container flexDirection="column" alignItems="center" gap="20px">
                    <Typography variant="h2">Featured Products</Typography>
                    <Typography variant="h3">Bestseller Products</Typography>
                    <Typography variant="body1">Problems trying to resolve conflict between</Typography>
                </Grid>
            </Grid>
            <Grid item container alignItems="center" gap="20px">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(() => <ProductCard />)}
            </Grid>
        </Grid>



    </Container>
}

export default FeatureProduct;