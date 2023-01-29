import Beam from "../images/beam.png"
import { Backdrop, Box, CircularProgress, Paper } from "@mui/material";
const Loader = () => {
    return <>
        <Box component={Paper} sx={{ display: 'flex', justifyContent: "center", alignItems: "center", minHeight: "100vh", background: "#E3E6E6" }}>
            <Backdrop
                sx={{ zIndex: (theme) => theme.zIndex.modal + 1 }}
                open={true}
            > <CircularProgress disableShrink /> </Backdrop>
            </Box>
    </>
}

export default Loader;