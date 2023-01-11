import { Grid, GridTypeMap } from "@mui/material"
import  { ReactElement } from "react";   
import { DefaultComponentProps, OverridableComponent } from "@mui/material/OverridableComponent"


export const ColumnContainer  = (props: DefaultComponentProps<GridTypeMap<{}, "div">>) : ReactElement<OverridableComponent<GridTypeMap<{}, "div">>>  => {
return <Grid container flexDirection="column" alignContent="center" border="5px solid red"
{...props}
>
    </Grid>
}

export const ColumnItem = (props: DefaultComponentProps<GridTypeMap<{}, "div">>) : ReactElement<OverridableComponent<GridTypeMap<{}, "div">>>=> {
    return <Grid item flexDirection="column" alignContent="center" border="5px solid blue" {...props}>
        </Grid>
    }