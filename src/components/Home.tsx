import FeatureProduct from "./FeatureProduct";
import Hero from "./Hero";
import ShopCards from "./ShopCards";
import FurnitureImage from "../images/furniture.jpg"

import { Card, Container, Grid, Paper, Typography } from "@mui/material";
const Home = () => {
    return <Grid container flexDirection="column" gap="20px" padding="2%" component={Paper}>
        <Hero />
        <ShopCards />
        <Container maxWidth="xl"  sx={{  padding:"2%" ,background:   "linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(33, 33, 33, 0.5)) , url(https://cdn.pixabay.com/index/2023/01/16/17-14-16-8_1440x550.jpg)" , minHeight:"320px"}}>
            <Grid container flexDirection="column" gap="15px">
            <Typography variant="h6" color="#E77C40">Product</Typography>
            <Typography variant="h2" color="white">Featured</Typography>
            <Typography variant="h3" color="white">Top Ten Products of the week</Typography>
            <Typography variant="h6" color="white">Explore terms</Typography>
            </Grid>
        </Container>
        
        <Hero flexDirection="row-reverse"/>
        <Container maxWidth="xl" sx={{ background:   "linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(33, 33, 33, 0.5)) , url(https://cdn.pixabay.com/index/2023/01/16/17-14-16-8_1440x550.jpg)" , minHeight:"320px"}}>
            <Grid container flexDirection="column" gap="15px">
            <Typography variant="h6" color="#E77C40">Product</Typography>
            <Typography variant="h2" color="white">Featured</Typography>
            <Typography variant="h3" color="white">Top Ten Products of the week</Typography>
            <Typography variant="h6" color="white">Explore terms</Typography>
            </Grid>
        </Container>
        <ShopCards flexDirection="row-reverse"/>



        

        
          

            

    </Grid>
}

export default Home;