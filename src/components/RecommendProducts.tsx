import { Container, Grid, Typography } from "@mui/material";
import ProductCard from './ProductCard';

const RecommendProduct = () => {
    return <Container maxWidth="xl" >
    <Grid container maxWidth="xl" flexDirection="column" alignItems="center" gap="20px">
    <Typography variant="h3" textAlign="center">BESTSELLER PRODUCT</Typography>
    <Grid container maxWidth="lg" justifyContent="center">
        {[1,2,3,4,5,6].map(() => <ProductCard />)}
    </Grid>
    </Grid>
    </Container>
}

export default RecommendProduct;