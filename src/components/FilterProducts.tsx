import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import FilterRow from "../components/FilterRow";
import ProductCard from "./ProductCard";

const FilterProducts = () => {
    return <>
        <Container >
            <Grid container maxWidth="xl" sx={{overflow: "scroll"}}>
            {[1,2,3,4,5,6,7,8,9,0,1,2].map(() => <ProductCard />)}
            </Grid>
        </Container>        
    </>
}
export default FilterProducts;