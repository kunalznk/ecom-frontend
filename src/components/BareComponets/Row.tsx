import { Grid, GridTypeMap } from "@mui/material"
import  { ReactElement } from "react";   
import { DefaultComponentProps, OverridableComponent } from "@mui/material/OverridableComponent"

export const RowContainer = (props: DefaultComponentProps<GridTypeMap<{}, "div">>) : ReactElement<OverridableComponent<GridTypeMap<{}, "div">>> => {
return <Grid container justifyContent="center" border="5px dashed black" {...props}>
    </Grid>
}

export const RowItem = (props: DefaultComponentProps<GridTypeMap<{}, "div">>)  : ReactElement<OverridableComponent<GridTypeMap<{}, "div">>> => {
    return <Grid item justifyContent="center" border="5px dashed green" {...props}>
        </Grid>
    }