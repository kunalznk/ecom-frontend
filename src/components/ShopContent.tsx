import { Grid, Typography } from "@mui/material"

const ShopContent = () => {
    return <Grid container maxWidth="xl" justifyContent="center" gap="10px" >
      {[1,2,3,4].map(() =><div style={{backgroundColor: "white", padding: "5px"}}>
      <Grid item sx={{ "&:hover": {backgroundImage: "linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(33, 33, 33, 0.5)) , url(https://cdn.pixabay.com/index/2023/01/16/17-14-16-8_1440x550.jpg)" , transform: "scale(1.04)", backgroundPosition:"center" , cursor: "pointer" } , minHeight:"320px" ,  minWidth:"320px",backgroundImage: "linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(33, 33, 33, 0.5)) , url(https://cdn.pixabay.com/index/2023/01/16/17-14-16-8_1440x550.jpg)" , backgroundSize:"cover" }}>
                <Grid container flexDirection="column" gap="10px" marginLeft="20px" paddingTop="5%">
            <Typography variant="h6" color="#E77C40">Product</Typography>
            <Typography variant="h2" color="white">Featured</Typography>
            <Typography variant="h3" color="white" maxWidth="300px">Top Ten Products of the week</Typography>
            <Typography variant="h6" color="white">Explore terms</Typography>
            </Grid>
        </Grid>
      </div>
     ) }
        
        </Grid>
}

export default ShopContent; 