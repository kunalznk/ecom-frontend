import { Box, Card, CardContent, Container, Grid, Tab, Tabs, Typography } from "@mui/material";


const ProductDescription = () => {
    return <Container maxWidth="xl" sx={{ padding: "20px"}}>
        <Grid container flexDirection="column" gap="50px">
            <Grid item container>
                <Grid container justifyContent="center" alignItems="center" gap="2%">
                    <Tabs>
                    <Tab icon={<Typography variant="subtitle2" color="grey">Description</Typography>} /> 
                    <Tab icon={<Typography variant="subtitle2" color="grey">Additional Information</Typography>} /> 
                    <Tab icon={<Typography variant="subtitle2" color="grey">Reviews 10</Typography>} /> 
                    </Tabs>
                    </Grid>
            </Grid>
        
            <Grid item container  justifyContent="center" gap="4%">
            <Grid item>
            <img 
         src="https://images.pexels.com/photos/1292770/pexels-photo-1292770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
         style={{maxWidth: "332px" , maxHeight: "372px" ,minWidth: "321px", minHeight:"271px" }}
                        />
            </Grid>
                
                <Grid container flexDirection="column" gap="20px" sx={{maxWidth: "332px"}}>
                    <Typography variant="h5">the quick foxs jumps over</Typography>
                    <Typography variant="body1">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</Typography>
                    <Typography variant="body1">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</Typography>
                    <Typography variant="body1">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</Typography>
            </Grid>
                
                <Grid container flexDirection="column" gap="20px" sx={{maxWidth: "332px"}}>
                    <Typography variant="h5">the quick foxs jumps over</Typography>
                    <Typography variant="body1">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</Typography>
                    <Typography variant="body1">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</Typography>
                    <Typography variant="body1">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</Typography>
            </Grid>
            </Grid>
            
        </Grid>
       
        
    </Container>
}

export default ProductDescription;