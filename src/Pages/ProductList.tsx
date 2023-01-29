import { Grid, Pagination, Paper } from "@mui/material";
import { Container } from "@mui/system";
import { useRef, useState } from "react";
import FilterCard from "../components/FilterCard";
import FilterProducts from "../components/FilterProducts";
import FilterRow from "../components/FilterRow";
import Filters from "../components/Filters";

const ProductList = () => {
    const filterRef = useRef(null);
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    return <Container maxWidth="xl" component={Paper}>
        <FilterRow setAnchorEl={setAnchorEl}/>
        <Filters  anchorEl={anchorEl}/>
        <FilterProducts />
        <Grid container justifyContent="center">
            <Paper>
            <Pagination count={10} />
            </Paper>
        </Grid>
        
    </Container>
}
export default ProductList;