import { Container, Grid, Paper } from "@mui/material";
import Product from "../components/Product";
import ProductDescription from "../components/ProductDescription";
import RecommendProduct from "../components/RecommendProducts";
import FeatureProduct from '../components/FeatureProduct';

const ProductPage = () => {
    return <>
    <Container maxWidth="xl" component={Paper}>
        <Grid container flexDirection="column" gap="30px">
            <Product />
            <ProductDescription />
            <RecommendProduct />
            <FeatureProduct />
        </Grid>
        </Container>
    </>
}
export default ProductPage;