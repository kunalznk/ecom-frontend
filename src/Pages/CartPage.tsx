import { TableRows } from "@mui/icons-material";
import { Button, ButtonGroup, Card, CardMedia, Container, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addToCart, deleteFromCart } from "../store/orderSlice";
import EmptyCart from '../components/EmptyCart';

const CartPage = () => {
    const  { cart }  = useAppSelector(state => state.entities.order);
    const dispatch = useAppDispatch()

    return  <div className="app-content">
        <Breadcrumbs />
        {!Boolean(cart?.products?.length) ? <EmptyCart /> : 
        <>
        <div className="u-s-p-b-60">
         <div className="section__intro u-s-m-b-60">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section__text-wrap">
                            <h1 className="section__heading u-c-secondary">SHOPPING CART</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        


        
        <div className="section__content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 u-s-m-b-30">
                        <div className="table-responsive">
                            <table className="table-p">
                                <tbody>
                                   { cart?.products.map((prod) => <tr>
                                        <td>
                                            <div className="table-p__box">
                                                <div className="table-p__img-wrap">

                                                    <img className="u-img-fluid" src={prod.main_image} alt="" /></div>
                                                <div className="table-p__info">

                                                    <span className="table-p__name">

                                                        <a href="product-detail.html">{prod.title}</a></span>

                                                    <span className="table-p__category">

                                                        <a href="shop-side-version-2.html">{prod.categories![0]}</a></span>
                                                  
                                                </div>
                                            </div>
                                        </td>
                                        <td>

                                            <span className="table-p__price">${prod.price.current_price}</span></td>
                                        <td>
                                            <div className="table-p__input-counter-wrap">

                                                
                                                <div className="input-counter">

                                                    <span className="input-counter__minus fas fa-minus" onClick={() => dispatch(deleteFromCart({
                                                        cartId: cart._id,
                                                        productId: prod._id,
                                                        quantity:1
                                                    }))}></span>

                                                    <input className="input-counter__text input-counter--text-primary-style" type="text" value={prod.quantity} data-min="1" data-max="1000" />

                                                    <span className="input-counter__plus fas fa-plus" onClick={() => dispatch(addToCart({
                                                        productId: prod._id!,
                                                        qty:1
                                                    }))}></span></div>
                                                
                                            </div>
                                        </td>
                                        <td>
                                            <div className="table-p__del-wrap">

                                                <a className="far fa-trash-alt table-p__delete-link" onClick={() => dispatch(deleteFromCart({
                                                    cartId: cart._id,
                                                    productId: prod._id
                                                }))}></a></div>
                                        </td>
                                    </tr>)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="route-box">
                            <div className="route-box__g1">

                                <Link to="/products" className="route-box__link"><i className="fas fa-long-arrow-alt-left"></i>

                                    <span>CONTINUE SHOPPING</span></Link></div>
                                        <div className="route-box__g2">
                                            <a className="route-box__link" onClick={() => dispatch(deleteFromCart({
                                                        cartId: cart?._id!,
                                                    }))}><i className="fas fa-trash"></i>
                                            <span>CLEAR CART</span></a>
                                            <a className="route-box__link" href="cart.html"><i className="fas fa-sync"></i>
                                            <span>UPDATE CART</span></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
        
        <div className="u-s-p-b-60">
            <div className="section__content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 u-s-m-b-30">
                        <form className="f-cart">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 u-s-m-b-30">
                                    <div className="f-cart__pad-box">
                                        <h1 className="gl-h1">ESTIMATE SHIPPING AND TAXES</h1>

                                        <span className="gl-text u-s-m-b-30">Enter your destination to get a shipping estimate.</span>
                                        <div className="u-s-m-b-30">

                                            

                                            <label className="gl-label" htmlFor="shipping-country">COUNTRY *</label><select className="select-box select-box--primary-style" id="shipping-country">
                                                <option selected value="">Choose Country</option>
                                                <option value="uae">United Arab Emirate (UAE)</option>
                                                <option value="uk">United Kingdom (UK)</option>
                                                <option value="us">United States (US)</option>
                                            </select>
                                            
                                        </div>
                                        <div className="u-s-m-b-30">
                                             <label className="gl-label" htmlFor="shipping-state">STATE/PROVINCE *</label><select className="select-box select-box--primary-style" id="shipping-state">
                                                <option selected value="">Choose State/Province</option>
                                                <option value="al">Alabama</option>
                                                <option value="al">Alaska</option>
                                                <option value="ny">New York</option>
                                            </select>
                                            
                                        </div>
                                        <div className="u-s-m-b-30">

                                            <label className="gl-label" htmlFor="shipping-zip">ZIP/POSTAL CODE *</label>

                                            <input className="input-text input-text--primary-style" type="text" id="shipping-zip" placeholder="Zip/Postal Code" /></div>
                                        <div className="u-s-m-b-30">

                                            <a className="f-cart__ship-link btn--e-transparent-brand-b-2" href="cart.html">CALCULATE SHIPPING</a></div>

                                        <span className="gl-text">Note: There are some countries where free shipping is available otherwise our flat rate charges or country delivery charges will be apply.</span>
                                    </div>
                                </div>
                               {/* Checkout */}
                                <div className="col-lg-6 col-md-6 u-s-m-b-30">
                                    <div className="f-cart__pad-box">
                                        <div className="u-s-m-b-30">
                                            <table className="f-cart__table">
                                                <tbody>
                                                    <tr>
                                                        <td>SHIPPING</td>
                                                        <td>$4.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>TAX</td>
                                                        <td>$0.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>SUBTOTAL</td>
                                                        <td>$379.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>GRAND TOTAL</td>
                                                        <td>$379.00</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div>

                                            <Link to="/checkout" className="btn btn--e-brand-b-2"> PROCEED TO CHECKOUT</Link></div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>}
</div>
   
}

export default CartPage;