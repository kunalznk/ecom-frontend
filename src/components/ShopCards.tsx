import { Card, Container, Grid, Paper, Typography } from "@mui/material";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ShopCards = (props:any) => {
    return <>
       <Container maxWidth="xl" sx={{ minHeight:"320px"}}>
            <Grid container gap="10px" justifyContent="center" flexDirection="row" {...props}>
                <Grid container item xs={12} sm={12} md={5.9} lg={5.9} xl={5.9}>
                <Container maxWidth="xl" sx={{ background:  "url(https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80)" , minHeight:"320px" , backgroundSize:"cover" }}>
                <Grid container flexDirection="column" gap="15px">
            <Typography variant="h6" color="#E77C40">Product</Typography>
            <Typography variant="h2" color="white">Featured</Typography>
            <Typography variant="h3" color="white">Top Ten Products of the week</Typography>
            <Typography variant="h6" color="white">Explore terms</Typography>
            </Grid>
        </Container>
                </Grid>
                <Grid container flexDirection="column" item xs={12} sm={12} md={5.9} lg={5.9} xl={5.9} gap="10px">
                <Grid container item justifyContent="space-between"gap="10px" >
                <Grid item container xs={12} sm={12} md={5.9} lg={5.9} xl={5.9} >
                <Container maxWidth="xl" component={Card} sx={{background: "url(https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8TGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60)" ,  backgroundSize:"cover"}}>
                <Grid container flexDirection="column" gap="15px">
            <Typography variant="h6" color="#E77C40">Product</Typography>
            <Typography variant="h2" color="white">Featured</Typography>
            <Typography variant="h3" color="white">Top Ten Products of the week</Typography>
            <Typography variant="h6" color="white">Explore terms</Typography>
            </Grid>
        </Container>
                </Grid> <Grid item xs={12} sm={12} md={5.9} lg={5.9} xl={5.9}>
                <Container maxWidth="xl" component={Card} sx={{background: "url(https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80)" , backgroundSize:"cover"}}>
                <Grid container flexDirection="column" gap="15px">
            <Typography variant="h6" color="#E77C40">Product</Typography>
            <Typography variant="h2" color="white">Featured</Typography>
            <Typography variant="h3" color="white">Top Ten Products of the week</Typography>
            <Typography variant="h6" color="white">Explore terms</Typography>
            </Grid>
        </Container>
                </Grid>
                        </Grid>
                        <Grid item>
                        <Container maxWidth="xl" component={Card} sx={{background: "url(https://images.unsplash.com/photo-1558098329-a11cff621064?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=990&q=80)" , backgroundSize:"cover" , backgroundPosition:"bottom"}}>
                        <Grid container flexDirection="column" gap="15px">
                    <Typography variant="h6" color="#E77C40">Product</Typography>
                    <Typography variant="h2" color="white">Featured</Typography>
                    <Typography variant="h3" color="white">Top Ten Products of the week</Typography>
                    <Typography variant="h6" color="white">Explore terms</Typography>
                    </Grid>
                </Container>
                        </Grid>
                </Grid>
                </Grid>
        </Container>
    </>
}
export default ShopCards;

{/* <Container maxWidth="xl">
<Grid container>
    <Grid item>
    <Grid container flexDirection="column" alignItems="flex-start">
        <Grid item>
        <Grid container justifyContent="space-between" gap="10px">
        <Grid item>
        <Typography variant="h5">Bestseller Product</Typography>
        </Grid>
        <Grid item>
        <Grid container alignItems="flex-start" gap="10px">
        <Typography variant="h6" color="blue" textAlign="center">Men</Typography>
        <Typography variant="h6" color="blue" textAlign="center">Women</Typography>
        <Typography variant="h6" color="blue" textAlign="center">Accessories</Typography>
    </Grid>
    </Grid>
        <Grid item>
        <Grid container alignItems="flex-start" gap="10px">
        <ArrowBackIosIcon />
        <ArrowForwardIosIcon />
    </Grid>
        </Grid>
    </Grid>
        </Grid>
        <Grid item>
        <Grid container alignItems="flex-start" gap="10px">
            <Grid item>
<Grid container alignItems="flex-start" gap="10px" >
    {[1,2,3].map(() => <Grid item> 
        <Grid container flexDirection="column" alignItems="flex-start">
    <Grid item>
        <img 
            src="https://i.picsum.photos/id/370/183/162.jpg?hmac=hV-bZzzDsHBCkSHl-cw3JxcbPnu3mQrdI-EnpIetio0"
            style={{width: "183px", height:"162px" , borderRadius:"10px" }}
            />
    </Grid>
    <Grid item>
        <Grid container flexDirection="column" alignItems="center" gap="10px">
                <Typography variant="h5">Product Title</Typography>
                <Typography variant="subtitle2" color="#737373">Product Descriptions</Typography>
                <Typography variant="h6" color="#737373">price</Typography>
        </Grid>
    </Grid>
        </Grid>
    </Grid>)}
</Grid></Grid>
<Grid item>
<Grid container alignItems="flex-start" gap="10px">
    {[1,2,3].map(() => <Grid item> 
        <Grid container flexDirection="column" alignItems="flex-start">
    <Grid item>
        <img 
            src="https://i.picsum.photos/id/370/183/162.jpg?hmac=hV-bZzzDsHBCkSHl-cw3JxcbPnu3mQrdI-EnpIetio0"
            style={{width: "183px", height:"162px" , borderRadius:"10px" }}
            />
    </Grid>
    <Grid item>
        <Grid container flexDirection="column" alignItems="center" gap="10px">
                <Typography variant="h5">Product Title</Typography>
                <Typography variant="subtitle2" color="#737373">Product Descriptions</Typography>
                <Typography variant="h6" color="#737373">price</Typography>
        </Grid>
    </Grid>
        </Grid>
    </Grid>)}
</Grid></Grid>
        </Grid>
        </Grid>
        </Grid>
        </Grid>
    </Grid>
</Container> */}