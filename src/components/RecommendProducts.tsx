import { Container, Grid, Paper, Tab, Tabs, Typography, useMediaQuery } from "@mui/material";
import  { tabsClasses } from '@mui/material/Tabs';
import { useState } from "react";
import { useAppSelector } from "../store/hooks";
import ContentCard from "./ContentCard";
import ProductCard from './ProductCard';

const RecommendProduct = () => {

    const  {products}  = useAppSelector(state => state.entities.product);
    return <Container maxWidth="xl" >
    <Grid container maxWidth="xl" flexDirection="column" alignItems="center" gap="20px">
    <Grid item><Typography variant="h3" textAlign="center">BESTSELLER PRODUCT</Typography></Grid>
    <Grid item><Typography variant="body1">Problems trying to resolve conflict between</Typography>
</Grid>
    <Grid item container justifyContent="space-evenly" gap="20px" maxWidth="lg">
        {products.slice(0,4).map((product) => <ContentCard product={product}/>)}
    </Grid>
    </Grid>
    </Container>
}

export default RecommendProduct;