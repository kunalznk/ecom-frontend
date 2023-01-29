import { Button, Container, Grid, Paper, Popper } from "@mui/material";
import FilterCard from "./FilterCard";

const Filters = (props:any) => {
    return  <Popper
    open={Boolean(props.anchorEl)} 
    anchorEl={props.anchorEl}
   placement="bottom-end"
   disablePortal={true}
   modifiers={[
     {
       name: 'flip',
       enabled: true,
       options: {
         altBoundary: true,
         rootBoundary: 'document',
         padding: 8,
       },
     },
     {
       name: 'preventOverflow',
       enabled: true,
       options: {
         altAxis: true,
         altBoundary: true,
         tether: true,
         rootBoundary: 'document',
         padding: 8,
       },
     },
     {
       name: 'arrow',
       enabled: true,
       options: {
         element: props.anchorEl,
       },
     },
   ]}
   sx={{width:"50%"}}
   
 >
     <Paper sx={{width:"100%"}} >
    <Grid container justifyContent="center" maxWidth="xl" padding="2%">
    {[1,2,3,4].map(() => <FilterCard />)}
    <Grid item container gap="10px" justifyContent="space-around">
    <Button variant="contained"> Apply </Button>
    <Button variant="contained" color="error"> Cancel </Button>
    </Grid>
    
    </Grid>
    </Paper>

 </Popper >    
   
}

export default Filters;