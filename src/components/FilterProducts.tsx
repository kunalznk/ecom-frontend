import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import FilterRow from "../components/FilterRow";
import ProductCard from "./ProductCard";

const FilterProducts = () => {
    return <>
            <Grid container maxWidth="xl" justifyContent="center" gap="25px">
            {[1,2,3,4,5,6,7,8,9,0,1,2].map(() => <ProductCard />)}
            </Grid>
    </>
}
export default FilterProducts;