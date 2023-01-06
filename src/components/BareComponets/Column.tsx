import { Grid } from "@mui/material"

export const ColumnContainer  = (props: any)  => {
return <Grid container flexDirection="column"  sx={{border: '2px solid red'}}
{...props}
>
    </Grid>
}

export const ColumnItem = (props: any) => {
    return <Grid flexDirection="column" item {...props}>
        </Grid>
    }