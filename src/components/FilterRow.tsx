import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";

const FilterRow = (props: any) => {
    return <Container maxWidth="lg">
        <Grid container justifyContent="center">
        <Grid item container justifyContent="space-between" maxWidth="xl">
            <Grid item>
                <Box sx={{ width: "141px" }} paddingTop="10%">
                <Typography variant="h6" color="#737373">Showing 12 result</Typography>
                </Box>
            </Grid>
            <Grid item>
                <Box sx={{ width: "141px" }} paddingTop="10%">
                <Typography variant="h6" color="#737373">Views</Typography>
                </Box>
            </Grid>
            <Grid item>
                <Grid container gap="5px">
                    <FormControl sx={{ width: "141px" }}>
                        <InputLabel>Popularity</InputLabel>
                        <Select>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
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