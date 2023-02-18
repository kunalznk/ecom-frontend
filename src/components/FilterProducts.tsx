import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import FilterRow from "../components/FilterRow";
import ProductCard from "./ProductCard";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchProducts } from "../store/productSlice";
import { useEffect } from "react";

const FilterProducts = () => {
    const { products } = useAppSelector(state => state.entities.product);
    //  filterProducts  instead of products
    const dispatch = useAppDispatch();

    useEffect(() => {
        // here dispatch filter prod when land on page
      // dispatch(fetchProducts())
    }, [])

    return <>
            <Grid container maxWidth="lg" justifyContent="space-between" gap="25px">
            {/* {products.map((product) => <ProductCard product={product}/>)} */}
            </Grid>
    </>
}
export default FilterProducts;