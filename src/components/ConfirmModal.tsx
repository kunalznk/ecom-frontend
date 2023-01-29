import { Typography , Grid, Card, Button, Container, Modal } from "@mui/material";
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

const ConfirmModal = () => {

    

    return <>
        <Modal
        open={true}
        >
        <Container maxWidth="sm" component={Card}>
        <Grid container flexDirection="column" alignItems="center" gap="40px" padding="20px" paddingBottom="30px" paddingTop="30px">
        <Grid container justifyContent="center" gap="15px" >
        <Grid item sx={{width: "50px" , background: "#23A6F0" , borderRadius:"10px"}} ><CheckCircleOutlinedIcon sx={{fontSize:"40px" , margin:"3px" , color:"whitesmoke"}}/></Grid>
        <Grid item>
            <Grid container flexDirection="column" alignItems="center" gap="10px">
            <Typography variant="h3">Sure you want to accept ?</Typography>
            <Typography variant="subtitle2" color="#737373">Are you sure you want to accept this ?</Typography>
        </Grid>
        </Grid>
        </Grid>
        <Grid container justifyContent="space-around">
        <Button variant="contained"  color="error" sx={{width: "200px"}}>No, Cancel</Button>
        <Button variant="contained" sx={{width: "200px"}}>Yes, Confirm</Button>
        </Grid>
        </Grid>
        </Container>
        </Modal>
        
        
       
        
       
    </>
}

export default ConfirmModal;