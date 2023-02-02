import { Link, Breadcrumbs, Grid, Pagination, Paper, Typography } from "@mui/material";
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
        <Grid container flexDirection="column" gap="20px" alignItems="center">
        <Grid 
        component={Paper}
        item 
        container gap ="10px"  maxWidth="lg" justifyContent="center" sx={{padding: "10px"}}>
         {   [1,2,3,4,5,].map(() =>  <img 
         src="https://images.pexels.com/photos/1292770/pexels-photo-1292770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            style={{width:"223px" ,height: "223px"}}
            />)}
        </Grid>
        <Grid item container justifyContent="flex-start" maxWidth="lg" sx={{height: '50px'}}><Typography variant="h2"> Shop </Typography></Grid>
        <Breadcrumbs aria-label="breadcrumb" component={Grid} container justifyContent="flex-start" maxWidth="lg" sx={{height: '50px'}}>
        <Link underline="hover" color="inherit" href="/">
          MUI
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Core
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="/material-ui/react-breadcrumbs/"
          aria-current="page"
        >
          Breadcrumbs
        </Link>
      </Breadcrumbs>
        <FilterRow setAnchorEl={setAnchorEl}/>
        <Filters  anchorEl={anchorEl}/>
        <FilterProducts />
        <Grid component={Paper} container justifyContent="center">
            <Grid item>
            <Pagination count={10}
            />
            </Grid>
        </Grid>
        </Grid>
       
        
    </Container>
}
export default ProductList;