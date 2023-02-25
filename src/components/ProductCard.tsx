import { Card, CardContent, CardHeader, CardMedia, Grid, Rating, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { productType } from "../utils/schema/product";
import { textOverfllow } from "../utils/utils";
import { Link } from 'react-router-dom';
import { useAppDispatch } from "../store/hooks";
import { addToCart } from '../store/orderSlice';


// {product}: {product: productType}
const ProductCard = ( props : { product : productType, id:number}) => {
    const { product } = props;

    const dispatch = useAppDispatch();
    
    return <Link to={props.id+""} style={{textDecoration:"none"}}>
        <div className="product-m">
                                    <div className="product-m__thumb">

                                        <a className="aspect aspect--bg-grey aspect--square u-d-block">

                                            <img className="aspect__img" 
                                            src={product.main_image ?? "images/product/men/product6.jpg"} 
                                            alt="" 
                                            / >
                                        
                                            </a>
                                        <div className="product-m__quick-look">

                                            <a className="fas fa-search" data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick Look"></a></div>
                                        <div className="product-m__add-cart">

                                            <a className="btn--e-brand" data-modal="modal" data-modal-id="#add-to-cart" onClick={() => dispatch(addToCart({
            productId: product._id!,
            qty: 1
        }))}>Add to Cart</a></div>
                                    </div>
                                    <div className="product-m__content">
                                        <div className="product-m__category">

                                            <a href="shop-side-version-2.html">{product?.categories![0]}</a></div>
                                        <div className="product-m__name">

                                            <a href="product-detail.html">{product.title.slice(0,30)}</a></div>
                                        <div className="product-m__rating gl-rating-style">
                                            {Array(product.reviews.rating).fill("start").map(() => 
                                            { return <>
                                             <i className="fas fa-star"></i>
                                            </>}
                                           
                                            )}
                                            <span className="product-m__review">({product.reviews.total_reviews})</span></div>
                                        <div className="product-m__price">${product.price.current_price}</div>
                                        <div className="product-m__hover">
                                            <div className="product-m__preview-description">
                                                <span>{product.description}</span>
                                            </div>
                                            <div className="product-m__wishlist">
                                                <a className="far fa-heart"  data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"></a>
                                                </div>
                                        </div>
                                    </div>
                                </div>
        
    </Link>
}

export default ProductCard;

{/* 

<Grid container flexDirection="column" alignItems="center" component={Card} maxWidth="320px" elevation={2}>
            <Grid item component={CardContent} maxWidth="300px">
                <img 
                src={product.main_image}
                style={{maxHeight: "255px", objectFit:"contain", objectPosition: "center"}}
                />
            </Grid>
            <Grid item container flexDirection="column" alignItems="center" component={CardContent}>
                    <Grid item container flexDirection="column" alignItems="center" gap="10px">
                        <Grid item container justifyContent="space-between" alignItems="flex-start">
                            <Grid item maxWidth="80%">
                                <Typography variant="subtitle2" sx={textOverfllow}>
                                    {product.title}</Typography>
                            </Grid>
                        <Grid item container gap="5px" width="50px" height="20px"  justifyContent="center"  sx={{backgroundColor:"black", borderRadius:"10px"}}>
                                <StarIcon sx={{  color: "#FFCE31",fontSize:"16px", marginTop:"1px" }} />
                                <Typography color="white" mt="3px" fontWeight={600}>{product.reviews.rating ?? 0}</Typography>
                        </Grid>
                        </Grid>
                        <Grid item>
                             <Typography variant="h5" sx={textOverfllow}>{product.product_information.brand}</Typography>
                        </Grid>
                        <Grid item> 
                                <Typography variant="body1" maxWidth="100 %" sx={textOverfllow}>{product.description}</Typography>
                        </Grid>
            <Grid item container justifyContent="center" alignItems="center" gap="5px">
            <Grid item  sx={{ borderRadius:"10px"}}>
                <ArrowDownwardIcon sx={{  color: "#737373",fontSize:"16px", marginTop:"1px" }} />
            </Grid>
            <Grid item>
            <Typography variant="h6" color="#737373">{product.reviews.total_reviews}</Typography>
            </Grid>
            
            </Grid>
            <Grid item container justifyContent="center" alignItems="center" gap="5px">
            <Grid item>
            <Typography variant="subtitle1" color="#737373">{product.price.before_price}</Typography>
            </Grid>
            <Grid item>
            <Typography variant="h6" color="#737373">{product.price.current_price}</Typography>
            </Grid>
             </Grid>
            </Grid>
            </Grid>

        </Grid>





<Grid item flexGrow={1}>
    <Card elevation={8} style={{margin:"4%"}}>
        <CardMedia component="img" src="https://i.picsum.photos/id/921/239/280.jpg?hmac=-XDHez5XM3ErDaDgnsqGICQsyyVtlfR2ivdZa1NmSTE" 
        sx={{ objectFit: "contain" }}/>
        <CardContent>
            <Grid container flexDirection="column" gap="10px">
            <Grid item container justifyContent="space-between" alignItems="center">
            <Grid item>
            <Typography variant="subtitle2" >English Department</Typography>
            </Grid>
            <Grid item container gap="5px" width="50px" height="20px"  justifyContent="center"  sx={{backgroundColor:"black", borderRadius:"10px"}}><StarIcon sx={{  color: "#FFCE31",fontSize:"16px", marginTop:"1px" }} /><Typography color="white" mt="3px" fontWeight={600}>4.6</Typography></Grid>
            </Grid>
            <Typography variant="h5">Graphic Design</Typography>
            <Typography variant="body1" maxWidth="280px">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</Typography>
            <Typography variant="h6" color="#737373">price</Typography>
            </Grid>
        </CardContent>
    </Card>
    </Grid> */}

    // <Grid item component={Card} elevation={6}>
    //         <Grid container flexDirection="column" gap="10px"  padding="10px">
    //             <Grid item>
    //                 <CardMedia
    //                 component="img"
    //                 src={product.main_image}
    //                 style={{width: "348px" , height: "300px", objectFit: "contain"}}
    //                 />
    //             </Grid>
    //             <Grid item container flexDirection="column" component={CardContent}>
    //                      <Grid item container flexDirection="column" gap="10px">
    //                     <Grid item container justifyContent="space-between" alignItems="center">
    //         <Grid item>
    //         <Typography variant="subtitle2" >{product.title}</Typography>
    //         </Grid>
    //         <Grid item container gap="5px" width="50px" height="20px"  justifyContent="center"  sx={{backgroundColor:"black", borderRadius:"10px"}}>
    //             <StarIcon sx={{  color: "#FFCE31",fontSize:"16px", marginTop:"1px" }} />
    //         <Typography color="white" mt="3px" fontWeight={600}>{product.reviews.rating ?? 0}</Typography>
    //         </Grid>
    //                     </Grid>
    //                     <Grid item>
    //                          <Typography variant="h5">{product.product_information.brand}</Typography>
    //                     </Grid>
    //                     <Grid item> 
    //                             <Typography variant="body1" maxWidth="280px">{product.description}</Typography>
    //                     </Grid>
    //         <Grid item container justifyContent="flex-start" alignItems="center" gap="4px">
    //         <Grid item  sx={{ borderRadius:"10px"}}>
    //             <ArrowDownwardIcon sx={{  color: "#737373",fontSize:"16px", marginTop:"1px" }} />
    //         </Grid>
    //         <Grid item>
    //         <Typography variant="h6" color="#737373">{product.reviews.total_reviews}</Typography>
    //         </Grid>
            
    //         </Grid>
    //         <Grid item container justifyContent="flex-start" alignItems="center" gap="4px">
    //         <Grid item>
    //         <Typography variant="subtitle1" color="#737373">{product.price.before_price}</Typography>
    //         </Grid>
    //         <Grid item>
    //         <Typography variant="h6" color="#737373">{product.price.current_price}</Typography>
    //         </Grid>
    //          </Grid>
    //         </Grid>
    //         </Grid>
    //         </Grid>
               
    //     </Grid>