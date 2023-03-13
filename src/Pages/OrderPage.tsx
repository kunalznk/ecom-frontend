import { Stack, Button, ButtonGroup, Card, CardContent, CardHeader, CardMedia, Container, Divider, Grid, InputLabel, Paper, Rating, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import BackgroundImage from "../images/backgroundImage.png"
import { useAppSelector } from "../store/hooks";
import { Link } from "react-router-dom";
const OrderPage = () => {
    const  {products}  = useAppSelector(state => state.entities.product);

    return <>
    <div className="app-content">

            
    <div className="u-s-p-y-60">

        
        <div className="section__content">
            <div className="container">
                <div className="breadcrumb">
                    <div className="breadcrumb__wrap">
                        <ul className="breadcrumb__list">
                            <li className="has-separator">

                                <a href="index.html">Home</a></li>
                            <li className="is-marked">

                                <a href="dash-my-order.html">My Account</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    


    
    <div className="u-s-p-b-60">

        
        <div className="section__content">
            <div className="dash">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-12">

                            
                            <div className="dash__box dash__box--bg-white dash__box--shadow u-s-m-b-30">
                                <div className="dash__pad-1">

                                    <span className="dash__text u-s-m-b-16">Hello, John Doe</span>
                                    <ul className="dash__f-list">
                                        <li>

                                            <a href="dashboard.html">Manage My Account</a></li>
                                        <li>

                                            <a href="dash-my-profile.html">My Profile</a></li>
                                        <li>

                                            <a href="dash-address-book.html">Address Book</a></li>
                                        <li>

                                            <a href="dash-track-order.html">Track Order</a></li>
                                        <li>

                                            <a className="dash-active" href="dash-my-order.html">My Orders</a></li>
                                        <li>

                                            <a href="dash-payment-option.html">My Payment Options</a></li>
                                        <li>

                                            <a href="dash-cancellation.html">My Returns & Cancellations</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="dash__box dash__box--bg-white dash__box--shadow dash__box--w">
                                <div className="dash__pad-1">
                                    <ul className="dash__w-list">
                                        <li>
                                            <div className="dash__w-wrap">

                                                <span className="dash__w-icon dash__w-icon-style-1"><i className="fas fa-cart-arrow-down"></i></span>

                                                <span className="dash__w-text">4</span>

                                                <span className="dash__w-name">Orders Placed</span></div>
                                        </li>
                                        <li>
                                            <div className="dash__w-wrap">

                                                <span className="dash__w-icon dash__w-icon-style-2"><i className="fas fa-times"></i></span>

                                                <span className="dash__w-text">0</span>

                                                <span className="dash__w-name">Cancel Orders</span></div>
                                        </li>
                                        <li>
                                            <div className="dash__w-wrap">

                                                <span className="dash__w-icon dash__w-icon-style-3"><i className="far fa-heart"></i></span>

                                                <span className="dash__w-text">0</span>

                                                <span className="dash__w-name">Wishlist</span></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-lg-9 col-md-12">
                            <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
                                <div className="dash__pad-2">
                                    <h1 className="dash__h1 u-s-m-b-14">My Orders</h1>

                                    <span className="dash__text u-s-m-b-30">Here you can see all products that have been delivered.</span>
                                    <form className="m-order u-s-m-b-30">
                                        <div className="m-order__select-wrapper">

                                            <label className="u-s-m-r-8" htmlFor="my-order-sort">Show:</label><select className="select-box select-box--primary-style" id="my-order-sort">
                                                <option selected>Last 5 orders</option>
                                                <option>Last 15 days</option>
                                                <option>Last 30 days</option>
                                                <option>Last 6 months</option>
                                                <option>Orders placed in 2018</option>
                                                <option>All Orders</option>
                                            </select></div>
                                    </form>
                                    <div className="m-order__list">
                                        <div className="m-order__get">
                                            <div className="manage-o__header u-s-m-b-30">
                                                <div className="dash-l-r">
                                                    <div>
                                                        <div className="manage-o__text-2 u-c-secondary">Order #305423126</div>
                                                        <div className="manage-o__text u-c-silver">Placed on 26 Oct 2016 09:08:37</div>
                                                    </div>
                                                    <div>
                                                        <div className="dash__link dash__link--brand">

                                                            <a href="dash-manage-order.html">MANAGE</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="manage-o__description">
                                                <div className="description__container">
                                                    <div className="description__img-wrap">

                                                        <img className="u-img-fluid" src="images/product/electronic/product3.jpg" alt="" /></div>
                                                    <div className="description-title">Yellow Wireless Headphone</div>
                                                </div>
                                                <div className="description__info-wrap">
                                                    <div>

                                                        <span className="manage-o__badge badge--processing">Processing</span></div>
                                                    <div>

                                                        <span className="manage-o__text-2 u-c-silver">Quantity:

                                                            <span className="manage-o__text-2 u-c-secondary">1</span></span></div>
                                                    <div>

                                                        <span className="manage-o__text-2 u-c-silver">Total:

                                                            <span className="manage-o__text-2 u-c-secondary">$16.00</span></span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="m-order__get">
                                            <div className="manage-o__header u-s-m-b-30">
                                                <div className="dash-l-r">
                                                    <div>
                                                        <div className="manage-o__text-2 u-c-secondary">Order #305423126</div>
                                                        <div className="manage-o__text u-c-silver">Placed on 26 Oct 2016 09:08:37</div>
                                                    </div>
                                                    <div>
                                                        <div className="dash__link dash__link--brand">

                                                            <a href="dash-manage-order.html">MANAGE</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="manage-o__description">
                                                <div className="description__container">
                                                    <div className="description__img-wrap">

                                                        <img className="u-img-fluid" src="images/product/women/product8.jpg" alt="" /></div>
                                                    <div className="description-title">New Dress D Nice Elegant</div>
                                                </div>
                                                <div className="description__info-wrap">
                                                    <div>

                                                        <span className="manage-o__badge badge--shipped">Shipped</span></div>
                                                    <div>

                                                        <span className="manage-o__text-2 u-c-silver">Quantity:

                                                            <span className="manage-o__text-2 u-c-secondary">1</span></span></div>
                                                    <div>

                                                        <span className="manage-o__text-2 u-c-silver">Total:

                                                            <span className="manage-o__text-2 u-c-secondary">$16.00</span></span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="m-order__get">
                                            <div className="manage-o__header u-s-m-b-30">
                                                <div className="dash-l-r">
                                                    <div>
                                                        <div className="manage-o__text-2 u-c-secondary">Order #305423126</div>
                                                        <div className="manage-o__text u-c-silver">Placed on 26 Oct 2016 09:08:37</div>
                                                    </div>
                                                    <div>
                                                        <div className="dash__link dash__link--brand">

                                                            <a href="dash-manage-order.html">MANAGE</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="manage-o__description">
                                                <div className="description__container">
                                                    <div className="description__img-wrap">

                                                        <img className="u-img-fluid" src="images/product/men/product8.jpg" alt="" /></div>
                                                    <div className="description-title">New Fashion D Nice Elegant</div>
                                                </div>
                                                <div className="description__info-wrap">
                                                    <div>

                                                        <span className="manage-o__badge badge--delivered">Delivered</span></div>
                                                    <div>

                                                        <span className="manage-o__text-2 u-c-silver">Quantity:

                                                            <span className="manage-o__text-2 u-c-secondary">1</span></span></div>
                                                    <div>

                                                        <span className="manage-o__text-2 u-c-silver">Total:

                                                            <span className="manage-o__text-2 u-c-secondary">$16.00</span></span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    
</div>
<div className="app-content">

            
<div className="u-s-p-y-60">

    
    <div className="section__content">
        <div className="container">
            <div className="breadcrumb">
                <div className="breadcrumb__wrap">
                    <ul className="breadcrumb__list">
                        <li className="has-separator">

                            <a href="index.html">Home</a></li>
                        <li className="is-marked">

                            <a href="dash-manage-order.html">My Account</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>




<div className="u-s-p-b-60">

    
    <div className="section__content">
        <div className="dash">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-12">

                        
                        <div className="dash__box dash__box--bg-white dash__box--shadow u-s-m-b-30">
                            <div className="dash__pad-1">

                                <span className="dash__text u-s-m-b-16">Hello, John Doe</span>
                                <ul className="dash__f-list">
                                    <li>

                                        <a className="dash-active" href="dashboard.html">Manage My Account</a></li>
                                    <li>

                                        <a href="dash-my-profile.html">My Profile</a></li>
                                    <li>

                                        <a href="dash-address-book.html">Address Book</a></li>
                                    <li>

                                        <a href="dash-track-order.html">Track Order</a></li>
                                    <li>

                                        <a href="dash-my-order.html">My Orders</a></li>
                                    <li>

                                        <a href="dash-payment-option.html">My Payment Options</a></li>
                                    <li>

                                        <a href="dash-cancellation.html">My Returns & Cancellations</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="dash__box dash__box--bg-white dash__box--shadow dash__box--w">
                            <div className="dash__pad-1">
                                <ul className="dash__w-list">
                                    <li>
                                        <div className="dash__w-wrap">

                                            <span className="dash__w-icon dash__w-icon-style-1"><i className="fas fa-cart-arrow-down"></i></span>

                                            <span className="dash__w-text">4</span>

                                            <span className="dash__w-name">Orders Placed</span></div>
                                    </li>
                                    <li>
                                        <div className="dash__w-wrap">

                                            <span className="dash__w-icon dash__w-icon-style-2"><i className="fas fa-times"></i></span>

                                            <span className="dash__w-text">0</span>

                                            <span className="dash__w-name">Cancel Orders</span></div>
                                    </li>
                                    <li>
                                        <div className="dash__w-wrap">

                                            <span className="dash__w-icon dash__w-icon-style-3"><i className="far fa-heart"></i></span>

                                            <span className="dash__w-text">0</span>

                                            <span className="dash__w-name">Wishlist</span></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-9 col-md-12">
                        <h1 className="dash__h1 u-s-m-b-30">Order Details</h1>
                        <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
                            <div className="dash__pad-2">
                                <div className="dash-l-r">
                                    <div>
                                        <div className="manage-o__text-2 u-c-secondary">Order #305423126</div>
                                        <div className="manage-o__text u-c-silver">Placed on 26 Oct 2016 09:08:37</div>
                                    </div>
                                    <div>
                                        <div className="manage-o__text-2 u-c-silver">Total:

                                            <span className="manage-o__text-2 u-c-secondary">$16.00</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
                            <div className="dash__pad-2">
                                <div className="manage-o">
                                    <div className="manage-o__header u-s-m-b-30">
                                        <div className="manage-o__icon"><i className="fas fa-box u-s-m-r-5"></i>

                                            <span className="manage-o__text">Package 1</span></div>
                                    </div>
                                    <div className="dash-l-r">
                                        <div className="manage-o__text u-c-secondary">Delivered on 26 Oct 2016</div>
                                        <div className="manage-o__icon"><i className="fas fa-truck u-s-m-r-5"></i>

                                            <span className="manage-o__text">Standard</span></div>
                                    </div>
                                    <div className="manage-o__timeline">
                                        <div className="timeline-row">
                                            <div className="col-lg-4 u-s-m-b-30">
                                                <div className="timeline-step">
                                                    <div className="timeline-l-i timeline-l-i--finish">

                                                        <span className="timeline-circle"></span></div>

                                                    <span className="timeline-text">Processing</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 u-s-m-b-30">
                                                <div className="timeline-step">
                                                    <div className="timeline-l-i timeline-l-i--finish">

                                                        <span className="timeline-circle"></span></div>

                                                    <span className="timeline-text">Shipped</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 u-s-m-b-30">
                                                <div className="timeline-step">
                                                    <div className="timeline-l-i">

                                                        <span className="timeline-circle"></span></div>

                                                    <span className="timeline-text">Delivered</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="manage-o__description">
                                        <div className="description__container">
                                            <div className="description__img-wrap">

                                                <img className="u-img-fluid" src="images/product/electronic/product3.jpg" alt="" /></div>
                                            <div className="description-title">Yellow Wireless Headphone</div>
                                        </div>
                                        <div className="description__info-wrap">
                                            <div>

                                                <span className="manage-o__text-2 u-c-silver">Quantity:

                                                    <span className="manage-o__text-2 u-c-secondary">1</span></span></div>
                                            <div>

                                                <span className="manage-o__text-2 u-c-silver">Total:

                                                    <span className="manage-o__text-2 u-c-secondary">$16.00</span></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="dash__box dash__box--bg-white dash__box--shadow u-s-m-b-30">
                                    <div className="dash__pad-3">
                                        <h2 className="dash__h2 u-s-m-b-8">Shipping Address</h2>
                                        <h2 className="dash__h2 u-s-m-b-8">John Doe</h2>

                                        <span className="dash__text-2">4247 Ashford Drive Virginia - VA-20006 - USA</span>

                                        <span className="dash__text-2">(+0) 900901904</span>
                                    </div>
                                </div>
                                <div className="dash__box dash__box--bg-white dash__box--shadow dash__box--w">
                                    <div className="dash__pad-3">
                                        <h2 className="dash__h2 u-s-m-b-8">Billing Address</h2>
                                        <h2 className="dash__h2 u-s-m-b-8">John Doe</h2>

                                        <span className="dash__text-2">4247 Ashford Drive Virginia - VA-20006 - USA</span>

                                        <span className="dash__text-2">(+0) 900901904</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="dash__box dash__box--bg-white dash__box--shadow u-h-100">
                                    <div className="dash__pad-3">
                                        <h2 className="dash__h2 u-s-m-b-8">Total Summary</h2>
                                        <div className="dash-l-r u-s-m-b-8">
                                            <div className="manage-o__text-2 u-c-secondary">Subtotal</div>
                                            <div className="manage-o__text-2 u-c-secondary">$16.00</div>
                                        </div>
                                        <div className="dash-l-r u-s-m-b-8">
                                            <div className="manage-o__text-2 u-c-secondary">Shipping Fee</div>
                                            <div className="manage-o__text-2 u-c-secondary">$16.00</div>
                                        </div>
                                        <div className="dash-l-r u-s-m-b-8">
                                            <div className="manage-o__text-2 u-c-secondary">Total</div>
                                            <div className="manage-o__text-2 u-c-secondary">$30.00</div>
                                        </div>

                                        <span className="dash__text-2">Paid by Cash on Delivery</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</div>

</div>
<div className="app-content">

            
            <div className="u-s-p-y-60">

                
                <div className="section__content">
                    <div className="container">
                        <div className="breadcrumb">
                            <div className="breadcrumb__wrap">
                                <ul className="breadcrumb__list">
                                    <li className="has-separator">

                                        <a href="index.html">Home</a></li>
                                    <li className="is-marked">

                                        <a href="dash-cancellation.html">My Account</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            


            
            <div className="u-s-p-b-60">

                
                <div className="section__content">
                    <div className="dash">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-12">

                                    
                                    <div className="dash__box dash__box--bg-white dash__box--shadow u-s-m-b-30">
                                        <div className="dash__pad-1">

                                            <span className="dash__text u-s-m-b-16">Hello, John Doe</span>
                                            <ul className="dash__f-list">
                                                <li>

                                                    <a href="dashboard.html">Manage My Account</a></li>
                                                <li>

                                                    <a href="dash-my-profile.html">My Profile</a></li>
                                                <li>

                                                    <a href="dash-address-book.html">Address Book</a></li>
                                                <li>

                                                    <a href="dash-track-order.html">Track Order</a></li>
                                                <li>

                                                    <a href="dash-my-order.html">My Orders</a></li>
                                                <li>

                                                    <a href="dash-payment-option.html">My Payment Options</a></li>
                                                <li>

                                                    <a className="dash-active" href="dash-cancellation.html">My Returns & Cancellations</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="dash__box dash__box--bg-white dash__box--shadow dash__box--w">
                                        <div className="dash__pad-1">
                                            <ul className="dash__w-list">
                                                <li>
                                                    <div className="dash__w-wrap">

                                                        <span className="dash__w-icon dash__w-icon-style-1"><i className="fas fa-cart-arrow-down"></i></span>

                                                        <span className="dash__w-text">4</span>

                                                        <span className="dash__w-name">Orders Placed</span></div>
                                                </li>
                                                <li>
                                                    <div className="dash__w-wrap">

                                                        <span className="dash__w-icon dash__w-icon-style-2"><i className="fas fa-times"></i></span>

                                                        <span className="dash__w-text">0</span>

                                                        <span className="dash__w-name">Cancel Orders</span></div>
                                                </li>
                                                <li>
                                                    <div className="dash__w-wrap">

                                                        <span className="dash__w-icon dash__w-icon-style-3"><i className="far fa-heart"></i></span>

                                                        <span className="dash__w-text">0</span>

                                                        <span className="dash__w-name">Wishlist</span></div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="col-lg-9 col-md-12">
                                    <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white">
                                        <div className="dash__pad-2">
                                            <h1 className="dash__h1 u-s-m-b-14">My Returns & Cancellations</h1>

                                            <span className="dash__text">There are no returns & cancellations yet.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
        <div className="app-content">

            
            <div className="u-s-p-y-60">

                
                <div className="section__content">
                    <div className="container">
                        <div className="breadcrumb">
                            <div className="breadcrumb__wrap">
                                <ul className="breadcrumb__list">
                                    <li className="has-separator">

                                        <a href="index.html">Home</a></li>
                                    <li className="is-marked">

                                        <a href="dash-payment-option.html">My Account</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            


            
            <div className="u-s-p-b-60">

                
                <div className="section__content">
                    <div className="dash">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-12">

                                    
                                    <div className="dash__box dash__box--bg-white dash__box--shadow u-s-m-b-30">
                                        <div className="dash__pad-1">

                                            <span className="dash__text u-s-m-b-16">Hello, John Doe</span>
                                            <ul className="dash__f-list">
                                                <li>

                                                    <a href="dashboard.html">Manage My Account</a></li>
                                                <li>

                                                    <a href="dash-my-profile.html">My Profile</a></li>
                                                <li>

                                                    <a href="dash-address-book.html">Address Book</a></li>
                                                <li>

                                                    <a href="dash-track-order.html">Track Order</a></li>
                                                <li>

                                                    <a href="dash-my-order.html">My Orders</a></li>
                                                <li>

                                                    <a className="dash-active" href="dash-payment-option.html">My Payment Options</a></li>
                                                <li>

                                                    <a href="dash-cancellation.html">My Returns & Cancellations</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="dash__box dash__box--bg-white dash__box--shadow dash__box--w">
                                        <div className="dash__pad-1">
                                            <ul className="dash__w-list">
                                                <li>
                                                    <div className="dash__w-wrap">

                                                        <span className="dash__w-icon dash__w-icon-style-1"><i className="fas fa-cart-arrow-down"></i></span>

                                                        <span className="dash__w-text">4</span>

                                                        <span className="dash__w-name">Orders Placed</span></div>
                                                </li>
                                                <li>
                                                    <div className="dash__w-wrap">

                                                        <span className="dash__w-icon dash__w-icon-style-2"><i className="fas fa-times"></i></span>

                                                        <span className="dash__w-text">0</span>

                                                        <span className="dash__w-name">Cancel Orders</span></div>
                                                </li>
                                                <li>
                                                    <div className="dash__w-wrap">

                                                        <span className="dash__w-icon dash__w-icon-style-3"><i className="far fa-heart"></i></span>

                                                        <span className="dash__w-text">0</span>

                                                        <span className="dash__w-name">Wishlist</span></div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="col-lg-9 col-md-12">
                                    <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white">
                                        <div className="dash__pad-2">
                                            <h1 className="dash__h1 u-s-m-b-14">My Payment Options</h1>

                                            <span className="dash__text">No payment options</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
        <div className="app-content">

            
<div className="u-s-p-y-60">

    
    <div className="section__content">
        <div className="container">
            <div className="breadcrumb">
                <div className="breadcrumb__wrap">
                    <ul className="breadcrumb__list">
                        <li className="has-separator">

                            <a href="index.html">Home</a></li>
                        <li className="is-marked">

                            <a href="dash-track-order.html">My Account</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>




<div className="u-s-p-b-60">

    
    <div className="section__content">
        <div className="dash">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-12">

                        
                        <div className="dash__box dash__box--bg-white dash__box--shadow u-s-m-b-30">
                            <div className="dash__pad-1">

                                <span className="dash__text u-s-m-b-16">Hello, John Doe</span>
                                <ul className="dash__f-list">
                                    <li>

                                        <a href="dashboard.html">Manage My Account</a></li>
                                    <li>

                                        <a href="dash-my-profile.html">My Profile</a></li>
                                    <li>

                                        <a href="dash-address-book.html">Address Book</a></li>
                                    <li>

                                        <a className="dash-active" href="dash-track-order.html">Track Order</a></li>
                                    <li>

                                        <a href="dash-my-order.html">My Orders</a></li>
                                    <li>

                                        <a href="dash-payment-option.html">My Payment Options</a></li>
                                    <li>

                                        <a href="dash-cancellation.html">My Returns & Cancellations</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="dash__box dash__box--bg-white dash__box--shadow dash__box--w">
                            <div className="dash__pad-1">
                                <ul className="dash__w-list">
                                    <li>
                                        <div className="dash__w-wrap">

                                            <span className="dash__w-icon dash__w-icon-style-1"><i className="fas fa-cart-arrow-down"></i></span>

                                            <span className="dash__w-text">4</span>

                                            <span className="dash__w-name">Orders Placed</span></div>
                                    </li>
                                    <li>
                                        <div className="dash__w-wrap">

                                            <span className="dash__w-icon dash__w-icon-style-2"><i className="fas fa-times"></i></span>

                                            <span className="dash__w-text">0</span>

                                            <span className="dash__w-name">Cancel Orders</span></div>
                                    </li>
                                    <li>
                                        <div className="dash__w-wrap">

                                            <span className="dash__w-icon dash__w-icon-style-3"><i className="far fa-heart"></i></span>

                                            <span className="dash__w-text">0</span>

                                            <span className="dash__w-name">Wishlist</span></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-9 col-md-12">
                        <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white">
                            <div className="dash__pad-2">
                                <h1 className="dash__h1 u-s-m-b-14">Track your Order</h1>

                                <span className="dash__text u-s-m-b-30">To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</span>
                                <form className="dash-track-order">
                                    <div className="gl-inline">
                                        <div className="u-s-m-b-30">

                                            <label className="gl-label" htmlFor="order-id">Order ID *</label>

                                            <input className="input-text input-text--primary-style" type="text" id="order-id" placeholder="Found in your confirmation email" /></div>
                                        <div className="u-s-m-b-30">

                                            <label className="gl-label" htmlFor="track-email">Email *</label>

                                            <input className="input-text input-text--primary-style" type="text" id="track-email" placeholder="Email you used during checkout" /></div>
                                    </div>

                                    <button className="btn btn--e-brand-b-2" type="submit">TRACK</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</div>

</div>
</>
   
}

export default OrderPage;

/*
 {[1,3,4].map(() => <><Grid item >
        <Grid item container display="flex" justifyContent="space-around" alignItems="center" padding="10px">  
    <Grid item>
        <CardMedia component="img" src="https://i.picsum.photos/id/921/239/280.jpg?hmac=-XDHez5XM3ErDaDgnsqGICQsyyVtlfR2ivdZa1NmSTE" 
        sx={{ objectFit: "contain", maxHeight: "404px", maxWidth: "328px", borderRadius:"10px" }}/>
       </Grid>
        <Grid item>
        <CardContent >
                    <Grid container flexDirection="column" alignItems="center" gap="20px">
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
        </Grid>
        
    <Grid item>
    <Typography variant="h6">Quantity</Typography>
    <ButtonGroup size="medium">
        <Button variant="contained">+</Button>
        {1 && <Button disabled>2</Button>}
        {1 && <Button variant="contained">-</Button>}
      </ButtonGroup>

    </Grid>
   
        </Grid>
        </Grid>
        <Divider variant="middle"/>
        </>
        )}

*/