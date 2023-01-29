import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";


const ProductDescription = () => {
    return <Container maxWidth="xl" sx={{ padding: "20px"}}>
        <Grid container flexDirection="column" gap="50px">
            <Grid item container>
                <Grid container justifyContent="center" alignItems="center" gap="2%">
                    <Box><Typography variant="subtitle2" color="grey">Description</Typography></Box>
                    <Box><Typography variant="subtitle2" color="grey">Additional Information</Typography></Box>
                    <Box><Typography variant="subtitle2" color="grey">Reviews 10</Typography></Box>
                </Grid>
            </Grid>
        
            <Grid item container  justifyContent="center" gap="4%">
            <Grid item>
            <img 
                        src="https://i.picsum.photos/id/370/183/162.jpg?hmac=hV-bZzzDsHBCkSHl-cw3JxcbPnu3mQrdI-EnpIetio0"
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