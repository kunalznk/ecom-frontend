import { TableRows } from "@mui/icons-material";
import { Button, Card, CardMedia, Container, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";

const CartPage = () => {
    return <Container maxWidth="xl" component={Paper}>
    <Typography variant="h2" textAlign="center">Order / WishList</Typography><br />
    <Typography variant="subtitle2" textAlign="center">Go To Products</Typography>
    <Grid container justifyContent="space-evenly" alignItems="center" gap="10px">
        <Grid item>
            <Table>
                <TableHead>
                    <TableCell>Product</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Qauntity</TableCell>
                    <TableCell>Subtotal</TableCell>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell><CardMedia component="img" src="https://i.picsum.photos/id/921/239/280.jpg?hmac=-XDHez5XM3ErDaDgnsqGICQsyyVtlfR2ivdZa1NmSTE" 
        sx={{ objectFit: "contain", maxHeight: "404px", maxWidth: "328px", borderRadius:"10px" }}/></TableCell>
                        <TableCell>Image</TableCell>
                        <TableCell>Image</TableCell>
                        <TableCell>Image</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><CardMedia component="img" src="https://i.picsum.photos/id/921/239/280.jpg?hmac=-XDHez5XM3ErDaDgnsqGICQsyyVtlfR2ivdZa1NmSTE" 
        sx={{ objectFit: "contain", maxHeight: "369px", maxWidth: "328px", borderRadius:"10px" , aspectRatio:"auto"}}/></TableCell>
                        <TableCell>Image</TableCell>
                        <TableCell>Image</TableCell>
                        <TableCell>Image</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Grid>
        <Grid item alignSelf="flex-start" component={Card} mt={10} p={5}>
        <Grid container flexDirection="column" justifyContent="flex-start" gap="10px">
    <Typography variant="h3">CART TOTAL</Typography>
    <Grid item container justifyContent="space-between">
    <Typography variant="body2">Subtotal</Typography> 
    <Typography variant="body2">$12,57</Typography>
    </Grid>
    <Typography variant="body1">Shipping option will be updated during checkout</Typography> 
    <Grid item container justifyContent="space-between">
    <Typography variant="body2">Total</Typography> 
    <Typography variant="body2">$12,57</Typography>
    </Grid>
    <Button variant="contained"> ADD TO CART / PLACE ORDER </Button>
    </Grid></Grid>
    </Grid>
    
    </Container>
}

export default CartPage;