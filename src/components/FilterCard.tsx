import { Button, Checkbox, FormControlLabel, Grid, Paper, Popper, Typography } from "@mui/material";

const FilterCard  = (props: any) => {
    return <>

        <Grid container item flexDirection="column" alignItems="center" maxWidth="217px"  padding="2%" gap="2%">
            <Typography variant="h5" textAlign="center">Filter by Categoy</Typography>
        <Grid container flexDirection="column" alignItems="center" gap="2%">
            {[1,2,3,4,5,6,7,8].map(() => <FormControlLabel control={<Checkbox  size="medium"/>} label={<Typography variant="h6" color="#737373">Option 1</Typography>} />

            )}
        </Grid>
        </Grid>

    </>
}

export default FilterCard;