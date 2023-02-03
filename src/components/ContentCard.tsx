import { Grid, Paper, CardContent, Typography } from "@mui/material";

const ContentCard = () => {
    return <>
        <Grid container flexDirection="column"  component={Paper} maxWidth="250px" elevation={2} padding="10px">
                <Grid item>
                        <img 
                    src="https://fastly.picsum.photos/id/541/240/150.jpg?hmac=dhteF8pb_wCEXHldghQ8oRoFJ0iKRp85beX_-8WqsZ8"
                    style={{ maxWidth: "230px", maxHeight: "150px", objectFit: "cover" }}
                        />
                </Grid>
                <Grid item container flexDirection="column" component={CardContent}>
                <Grid item>
                             <Typography variant="h5">Graphic Design</Typography>
                        </Grid>
                        <Grid item> 
                                <Typography variant="body2" maxWidth="280px">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</Typography>
                        </Grid>
                </Grid>
        </Grid>
    </>
}

export default ContentCard;

