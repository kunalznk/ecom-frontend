import { Grid, Paper, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { productType } from "../utils/schema/product";
import { textOverfllow } from "../utils/utils";

const ContentCard = ({product} : { product: productType }) => {
    return <Link to="/products/1" style={{textDecoration:"none"}}>
        {/* <Grid container flexDirection="column" alignItems="center"  component={Paper} maxWidth="250px" elevation={2} padding="10px">
                <Grid item>
                        <img 
                    src={product.main_image}
                    style={{ maxWidth: "230px", maxHeight: "150px", objectFit: "cover" }}
                        />
                </Grid>
                <Grid item container flexDirection="column" component={CardContent}>
                <Grid item>
                             <Typography variant="h6" sx={textOverfllow}>{product.product_information.brand}</Typography>
                        </Grid>
                        <Grid item> 
                                <Typography variant="body2" sx={textOverfllow} maxWidth="280px">{product.description}</Typography>
                        </Grid>
                </Grid>
        </Grid> */}
        </Link>
}

export default ContentCard;

