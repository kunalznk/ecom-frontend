import { Box, Button, Card, Container, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Typography } from "@mui/material";
import FormInput from "./FormInput";

const FilterRow = (props: any) => {
    const sortBy = [{
        label :"Sort By" ,
        value: undefined },
        {
            label :"Price Low to High" ,
            value: undefined },
            {
                label :"Price High to Low" ,
                value: undefined },
                {
                    label :"Popularity" ,
                    value: undefined },
                    {
                        label :"Relevance" ,
                        value: undefined }]
    return <Container maxWidth="lg" component={Paper} sx={{padding: "15px"}}>
        <Grid container justifyContent="center">
        <Grid item container justifyContent="space-between" maxWidth="xl">
            <Grid item>
                <Box sx={{ width: "141px" }} paddingTop="10%">
                <Typography variant="h6" color="#737373">Showing 12 result</Typography>
                </Box>
            </Grid>
           
            <Grid item>
                <Grid container gap="5px">
                    <FormControl >
                        <Select
                        defaultValue={sortBy[0].value}
                        label={sortBy[0].label}
                        > 
                            {sortBy.map(({label , value}) => <MenuItem value={value}>{label}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <Button variant="contained" sx={{ width: "94px", height: "50px" }} onClick={(e) => {
                        props.setAnchorEl(e.currentTarget);
                    }}>Filter</Button>
                </Grid>
                </Grid>
        </Grid>
        </Grid>
    </Container>
}

export default FilterRow;