import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Text from "./Test";
import { productActions } from '../store/productSlice';
import { Link } from "react-router-dom";
import { deleteFromCart } from "../store/orderSlice";


const Header = () => {
  const [ values , setValues  ] = useState<any[]>([])  
  
  const dispatch = useAppDispatch();
  const { product, order } = useAppSelector((state) => state.entities);
  const {categories } = product;
  const { cart } = order;

  useEffect(() => {
    const categories = values;
    // [ ...(new Set(values)).values() ]
    dispatch(productActions.setFilter({
        categories
    }))
  }, [values])
  return <>
  <header className="header--style-1">
      <nav className="primary-nav primary-nav-wrapper--border">
        <div className="container">


          <div className="primary-nav">



            <a className="main-logo" href="index.html">

              <img src="images/logo/logo-1.png" alt="" /></a>




            <form className="main-form">

              <label htmlFor="main-search"></label>

              <input className="input-text input-text--border-radius input-text--style-1" type="text" id="main-search" placeholder="Search" />

              <button className="btn btn--icon fas fa-search main-search-button" type="submit"></button></form>




            <div className="menu-init" id="navigation">

              <button className="btn btn--icon toggle-button toggle-button--secondary fas fa-cogs" type="button"></button>


              <div className="ah-lg-mode">

                <span className="ah-close">✕ Close</span>


                <ul className="ah-list ah-list--design1 ah-list--link-color-secondary">
                  <li className="has-dropdown" data-tooltip="tooltip" data-placement="left" title="Account">

                    <a><i className="far fa-user-circle"></i></a>



                    <span className="js-menu-toggle"></span>
                    <ul style={{ width: "120px" }}>
                      <li>

                        <a href="dashboard.html"><i className="fas fa-user-circle u-s-m-r-6"></i>

                          <span>Account</span></a></li>
                      <li>

                        <a href="signup.html"><i className="fas fa-user-plus u-s-m-r-6"></i>

                          <span>Signup</span></a></li>
                      <li>

                        <a href="signin.html"><i className="fas fa-lock u-s-m-r-6"></i>

                          <span>Signin</span></a></li>
                      <li>

                        <a href="signup.html"><i className="fas fa-lock-open u-s-m-r-6"></i>

                          <span>Signout</span></a></li>
                    </ul>

                  </li>
                  <li className="has-dropdown" data-tooltip="tooltip" data-placement="left" title="Settings">

                    <a><i className="fas fa-user-cog"></i></a>



                    <span className="js-menu-toggle"></span>
                    <ul style={{ width: "120px" }}>
                      <li className="has-dropdown has-dropdown--ul-right-100">

                        <a>Language<i className="fas fa-angle-down u-s-m-l-6"></i></a>



                        <span className="js-menu-toggle"></span>
                        <ul style={{ width: "120px" }}>
                          <li>

                            <a className="u-c-brand">ENGLISH</a></li>
                          <li>

                            <a>ARABIC</a></li>
                          <li>

                            <a>FRANCAIS</a></li>
                          <li>

                            <a>ESPANOL</a></li>
                        </ul>

                      </li>
                      <li className="has-dropdown has-dropdown--ul-right-100">

                        <a>Currency<i className="fas fa-angle-down u-s-m-l-6"></i></a>



                        <span className="js-menu-toggle"></span>
                        <ul style={{ width: "225px" }}>
                          <li>

                            <a className="u-c-brand">$ - US DOLLAR</a></li>
                          <li>

                            <a>£ - BRITISH POUND STERLING</a></li>
                          <li>

                            <a>€ - EURO</a></li>
                        </ul>

                      </li>
                    </ul>

                  </li>
                  <li data-tooltip="tooltip" data-placement="left" title="Contact">

                    <a href="tel:+0900901904"><i className="fas fa-phone-volume"></i></a></li>
                  <li data-tooltip="tooltip" data-placement="left" title="Mail">

                    <a href="mailto:contact@domain.com"><i className="far fa-envelope"></i></a></li>
                </ul>

              </div>

            </div>

          </div>

        </div>
      </nav>




      <nav className="secondary-nav-wrapper">
        <div className="container">


          <div className="secondary-nav">


            <div className="menu-init" id="navigation1">

              <button className="btn btn--icon toggle-mega-text toggle-button" type="button">M</button>


              <div className="ah-lg-mode">

                <span className="ah-close">✕ Close</span>


                <ul className="ah-list">
                  <li className="has-dropdown">

                    <span className="mega-text">M</span>
                    </li>
                </ul>
                </div>
              </div>




            <div className="menu-init" id="navigation2">

              <button className="btn btn--icon toggle-button toggle-button--secondary fas fa-cog" type="button"></button>


              <div className="ah-lg-mode">

                <span className="ah-close">✕ Close</span>


                <ul className="ah-list ah-list--design2 ah-list--link-color-secondary">
                  <li>

                    <Link to="products">NEW ARRIVALS</Link></li>
                  <li className="has-dropdown">

                    <a>SHOP<i className="fas fa-angle-down u-s-m-l-6"></i></a>
                    <span className="js-menu-toggle"></span>


                    <span className="js-menu-toggle"></span>
                    <ul style={{ width: "225px" }}>
                      <li>

                        <a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                      <li>

                        <a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                      <li>

                        <a href="blog-sidebar-none.html">Blog Sidebar None</a></li>
                      <li>

                        <a href="blog-masonry.html">Blog Masonry</a></li>
                      <li>

                        <a href="blog-detail.html">Blog Details</a></li>
                    </ul>

                    <Text filter={categories} values={values} setValues={setValues}/>

                  </li>
                 
                  <li>

                    <a href="shop-side-version-2.html">VALUE OF THE DAY</a></li>
                  <li>

                    <a href="shop-side-version-2.html">GIFT CARDS</a></li>
                </ul>

              </div>

            </div>




            <div className="menu-init" id="navigation3">

              <button className="btn btn--icon toggle-button toggle-button--secondary fas fa-shopping-bag toggle-button-shop" type="button"></button>

              <span className="total-item-round">2</span>


              <div className="ah-lg-mode">

                <span className="ah-close">✕ Close</span>


                <ul className="ah-list ah-list--design1 ah-list--link-color-secondary">
                  <li>

                    <a href="index.html"><i className="fas fa-home u-c-brand"></i></a></li>
                  <li>

                    <a href="wishlist.html"><i className="far fa-heart"></i></a></li>
                  <li className="has-dropdown">

                    <a className="mini-cart-shop-link"><i className="fas fa-shopping-bag"></i>

                      <span className={cart?.products.length ? "total-item-round" : ""}>{Boolean(cart?.products.length) ? cart?.products.length : ""}</span>
                      </a>



                    <span className="js-menu-toggle"></span>
                    <div className="mini-cart">


                      <div className="mini-product-container gl-scroll u-s-m-b-15">

                        {cart?.products.map((prod) => <div className="card-mini-product">
                          <div className="mini-product">
                            <div className="mini-product__image-wrapper">
                              <a className="mini-product__link" href="/cart">

                                <img className="u-img-fluid" src={prod.main_image} alt="" /></a></div>
                            <div className="mini-product__info-wrapper">
                              <span className="mini-product__category">
                                <a>{prod.categories![0]}</a>
                              </span>
                              <span className="mini-product__name">
                                <a>{prod.title.slice(0,30)}</a>
                              </span>
                              <span className="mini-product__quantity">{prod.quantity} x</span>

                              <span className="mini-product__price">${prod.price.current_price}</span></div>
                          </div>
                          <a className="mini-product__delete-link far fa-trash-alt" onClick={() => dispatch(deleteFromCart({cartId: cart._id , productId: prod._id}))}/>
                        </div>)}
                        </div>
                        { Boolean(cart?.products.length) ? <div className="mini-product-stat">
                        <div className="mini-total">

                          <span className="subtotal-text">SUBTOTAL</span>

                          <span className="subtotal-value">${cart?.price}</span></div>
                        <div className="mini-action">

                          <a className="mini-link btn--e-brand-b-2" href="checkout.html">PROCEED TO CHECKOUT</a>

                          <Link className="mini-link btn--e-transparent-secondary-b-2" to="/cart">VIEW CART</Link></div>
                      </div> : <div className="mini-product-stat">
                        <div className="mini-action">

                          <a className="mini-link btn--e-brand-b-2" href="/products">GO TO SHOPPING</a>

                          </div>
                      </div>}

                    </div>

                  </li>
                </ul>

              </div>

            </div>

          </div>

        </div>
      </nav>
    </header>
  </>
}
export default Header;