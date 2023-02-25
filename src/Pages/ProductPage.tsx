
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useParams } from "react-router-dom";
import { useState } from "react";
import { deleteFromCart, addToCart } from '../store/orderSlice';

const ProductPage = () => {

    const {productId } = useParams();
    const dispatch = useAppDispatch();
    const [tab , setTab ] = useState<number>(0);

    const {product: products , order} = useAppSelector((state) => state.entities)
    const product = products.filterProducts[+productId!];
    const inCart = order.cart?.products.filter(({ _id  }) => _id === product._id )[0]?.quantity;
    const [ quantity, setQuantity] = useState<number>(inCart ?? 1);

    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: product._id!,
            qty: quantity
        }))
        
    }

    const handleDeleteFromCart = () => {
        dispatch(deleteFromCart({
            cartId: order.cart?._id!, 
            productId: product._id!, 
            quantity: 1 
        }))
    }
    return <>
    <div className="app-content">

            
<div className="u-s-p-t-90">
    <div className="container">
        <div className="row">
            <div className="col-lg-5">

                
                <div className="pd-breadcrumb u-s-m-b-30">
                    <ul className="pd-breadcrumb__list">
                        <li className="has-separator">

                            <a href="index.hml">Home</a></li>
                        <li className="has-separator">

                            <a href="shop-side-version-2.html">Electronics</a></li>
                        <li className="has-separator">

                            <a href="shop-side-version-2.html">DSLR Cameras</a></li>
                        <li className="is-marked">

                            <a href="shop-side-version-2.html">Nikon Cameras</a></li>
                    </ul>
                </div>
                


                
                <div className="pd u-s-m-b-30">
                    <div className="pd-wrap">
                        <div id="pd-o-initiate">
                            <div className="pd-o-img-wrap">
                                <img  className="u-img-fluid" src={product.main_image} alt="" />
                                </div>
                           </div>

                        {/* <span className="pd-text">Click for larger zoom</span> */}
                    </div>
                    {/* <div className="u-s-m-t-15">
                        <div className="">
                            <div id="pd-o-thumbnail">
                                <div>
                                    <img className="u-img-fluid" src={product.main_image} alt="" /></div>
                               </div>
                        </div>
                    </div> */}
                </div>
                
            </div>
            <div className="col-lg-7">

                
                <div className="pd-detail">
                    <div>

                        <span className="pd-detail__name">{product.title}</span></div>
                    <div>
                        <div className="pd-detail__inline">

                            <span className="pd-detail__price">${product.price.current_price}</span>

                            <span className="pd-detail__discount">({product.price.savings_percent}% OFF)</span><del className="pd-detail__del">${product.price.before_price}</del></div>
                    </div>
                    <div className="u-s-m-b-15">
                        <div className="pd-detail__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i>

                            <span className="pd-detail__review u-s-m-l-4">

                                <a data-click-scroll="#view-review">{product.reviews.total_reviews} Reviews</a></span></div>
                    </div>
                    <div className="u-s-m-b-15">
                        <div className="pd-detail__inline">

                            <span className="pd-detail__stock">200 in stock</span>

                            <span className="pd-detail__left">Only 2 left</span></div>
                    </div>
                    <div className="u-s-m-b-15">

                        <span className="pd-detail__preview-desc">{product.description}</span></div>
                    <div className="u-s-m-b-15">
                        <div className="pd-detail__inline">

                            <span className="pd-detail__click-wrap"><i className="far fa-heart u-s-m-r-6"></i>

                                <a href="signin.html">Add to Wishlist</a>
                                </span></div>
                    </div>
                    <div className="u-s-m-b-15">
                        <div className="pd-detail__inline">

                            <span className="pd-detail__click-wrap"><i className="far fa-envelope u-s-m-r-6"></i>

                                <a href="signin.html">Email me When the price drops</a>
                                </span></div>
                    </div>
                    <div className="u-s-m-b-15">
                        <ul className="pd-social-list">
                            <li>

                                <a className="s-fb--color-hover" href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li>

                                <a className="s-tw--color-hover" href="#"><i className="fab fa-twitter"></i></a></li>
                            <li>

                                <a className="s-insta--color-hover" href="#"><i className="fab fa-instagram"></i></a></li>
                            <li>

                                <a className="s-wa--color-hover" href="#"><i className="fab fa-whatsapp"></i></a></li>
                            <li>

                                <a className="s-gplus--color-hover" href="#"><i className="fab fa-google-plus-g"></i></a></li>
                        </ul>
                    </div>
                    <div className="u-s-m-b-15">
                        <form className="pd-detail__form">
                            <div className="pd-detail-inline-2">
                                <div className="u-s-m-b-15">

                                    
                                    <div className="input-counter">

                                        <span className="input-counter__minus fas fa-minus" onClick={() => {if(quantity > 1) {setQuantity(quantity - 1); handleDeleteFromCart();}}} / >

                                        <input className="input-counter__text input-counter--text-primary-style" type="text" value={quantity+""} data-min="1" data-max="1000" />

                                        <span className="input-counter__plus fas fa-plus" onClick={() => setQuantity(quantity + 1)} /></div>
                                    
                                </div>
                                <div className="u-s-m-b-15">
                                    <button className="btn btn--e-brand-b-2" onClick={(e) => {e.preventDefault();  handleAddToCart();}}>Add to Cart</button></div>
                            </div>
                        </form>
                    </div>
                    <div className="u-s-m-b-15">

                        <span className="pd-detail__label u-s-m-b-8">Product Policy:</span>
                        <ul className="pd-detail__policy-list">
                            <li><i className="fas fa-check-circle u-s-m-r-8"></i>

                                <span>Buyer Protection.</span></li>
                            <li><i className="fas fa-check-circle u-s-m-r-8"></i>

                                <span>Full Refund if you don't receive your order.</span></li>
                            <li><i className="fas fa-check-circle u-s-m-r-8"></i>

                                <span>Returns accepted if product not as described.</span></li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>


<div className="u-s-p-y-90">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="pd-tab">
                    <div className="u-s-m-b-30">
                        <ul className="nav pd-tab__list">
                            <li className="nav-item" onClick={(e) => setTab(0)}>

                                <a className={ tab === 0 ? "nav-link active" : "nav-link"}>DESCRIPTION</a></li>
                            <li className="nav-item" onClick={(e) => setTab(1)}>
                                <a className={ tab === 1 ? "nav-link active" : "nav-link"}>TAGS</a></li>
                            <li className="nav-item" onClick={(e) => setTab(2)}>
                                <a className={ tab === 2 ? "nav-link active" : "nav-link"}>REVIEWS
                                <span>({product.reviews.total_reviews})</span></a></li>
                        </ul>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="pd-desc">
                            <div className="pd-tab__desc">
                                <div className="u-s-m-b-15">
                                    <p>{product.description}</p>
                                </div>
                                <div className="u-s-m-b-30"><iframe src="https://www.youtube.com/embed/qKqSBm07KZk" allowFullScreen={false}></iframe></div>
                                <div className="u-s-m-b-30">
                                    <ul>
                                        {product.feature_bullets?.slice(0,4).map((feature) => <li><i className="fas fa-check u-s-m-r-8"></i>

                                            <span>{feature}</span></li>)}
                                        </ul>
                                </div>
                                <div className="u-s-m-b-15">
                                    <h4>PRODUCT INFORMATION</h4>
                                </div>
                                <div className="u-s-m-b-15">
                                    <div className="pd-table gl-scroll">
                                        <table>
                                            <tbody>
                                                {/* { product.product_information &&  JSON.parse(product.product_information!).map(({key , value}) => {
                                                    <tr>
                                                    <td>{key}</td>
                                                    <td>{value}</td>
                                                    </tr>
                                                }) } */}
                                               
                                                <tr>
                                                    <td>Color</td>
                                                    <td>Green, Blue, Red</td>
                                                </tr>
                                                <tr>
                                                    <td>Sleeves</td>
                                                    <td>Long Sleeve</td>
                                                </tr>
                                                <tr>
                                                    <td>Top Fit</td>
                                                    <td>Regular</td>
                                                </tr>
                                                <tr>
                                                    <td>Print</td>
                                                    <td>Not Printed</td>
                                                </tr>
                                                <tr>
                                                    <td>Neck</td>
                                                    <td>Round Neck</td>
                                                </tr>
                                                <tr>
                                                    <td>Pieces Count</td>
                                                    <td>1 Piece</td>
                                                </tr>
                                                <tr>
                                                    <td>Occasion</td>
                                                    <td>Casual</td>
                                                </tr>
                                                <tr>
                                                    <td>Shipping Weight (kg)</td>
                                                    <td>0.5</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        


                        
                        <div className="tab-pane" id="pd-tag">
                            <div className="pd-tab__tag">
                                <h2 className="u-s-m-b-15">ADD YOUR TAGS</h2>
                                <div className="u-s-m-b-15">
                                    <form>

                                        <input className="input-text input-text--primary-style" type="text" />

                                        <button className="btn btn--e-brand-b-2" type="submit">ADD TAGS</button></form>
                                </div>

                                <span className="gl-text">Use spaces to separate tags. Use single quotes (') for phrases.</span>
                            </div>
                        </div>
                        


                        
                        <div className="tab-pane" id="pd-rev">
                            <div className="pd-tab__rev">
                                <div className="u-s-m-b-30">
                                    <div className="pd-tab__rev-score">
                                        <div className="u-s-m-b-8">
                                            <h2>23 Reviews - 4.6 (Overall)</h2>
                                        </div>
                                        <div className="gl-rating-style-2 u-s-m-b-8"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></div>
                                        <div className="u-s-m-b-8">
                                            <h4>We want to hear from you!</h4>
                                        </div>

                                        <span className="gl-text">Tell us what you think about this item</span>
                                    </div>
                                </div>
                                <div className="u-s-m-b-30">
                                    <form className="pd-tab__rev-f1">
                                        <div className="rev-f1__group">
                                            <div className="u-s-m-b-15">
                                                <h2>23 Review(s) for Man Ruched Floral Applique Tee</h2>
                                            </div>
                                            <div className="u-s-m-b-15">

                                                <label htmlFor="sort-review"></label><select className="select-box select-box--primary-style" id="sort-review">
                                                    <option selected>Sort by: Best Rating</option>
                                                    <option>Sort by: Worst Rating</option>
                                                </select></div>
                                        </div>
                                        <div className="rev-f1__review">
                                            <div className="review-o u-s-m-b-15">
                                                <div className="review-o__info u-s-m-b-8">

                                                    <span className="review-o__name">John Doe</span>

                                                    <span className="review-o__date">27 Feb 2018 10:57:43</span></div>
                                                <div className="review-o__rating gl-rating-style u-s-m-b-8"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i>

                                                    <span>(4)</span></div>
                                                <p className="review-o__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                            <div className="review-o u-s-m-b-15">
                                                <div className="review-o__info u-s-m-b-8">

                                                    <span className="review-o__name">John Doe</span>

                                                    <span className="review-o__date">27 Feb 2018 10:57:43</span></div>
                                                <div className="review-o__rating gl-rating-style u-s-m-b-8"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i>

                                                    <span>(4)</span></div>
                                                <p className="review-o__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                            <div className="review-o u-s-m-b-15">
                                                <div className="review-o__info u-s-m-b-8">

                                                    <span className="review-o__name">John Doe</span>

                                                    <span className="review-o__date">27 Feb 2018 10:57:43</span></div>
                                                <div className="review-o__rating gl-rating-style u-s-m-b-8"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i>

                                                    <span>(4)</span></div>
                                                <p className="review-o__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="u-s-m-b-30">
                                    <form className="pd-tab__rev-f2">
                                        <h2 className="u-s-m-b-15">Add a Review</h2>

                                        <span className="gl-text u-s-m-b-15">Your email address will not be published. Required fields are marked *</span>
                                        <div className="u-s-m-b-30">
                                            <div className="rev-f2__table-wrap gl-scroll">
                                                <table className="rev-f2__table">
                                                    <thead>
                                                        <tr>
                                                            <th>
                                                                <div className="gl-rating-style-2"><i className="fas fa-star"></i>

                                                                    <span>(1)</span></div>
                                                            </th>
                                                            <th>
                                                                <div className="gl-rating-style-2"><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i>

                                                                    <span>(1.5)</span></div>
                                                            </th>
                                                            <th>
                                                                <div className="gl-rating-style-2"><i className="fas fa-star"></i><i className="fas fa-star"></i>

                                                                    <span>(2)</span></div>
                                                            </th>
                                                            <th>
                                                                <div className="gl-rating-style-2"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i>

                                                                    <span>(2.5)</span></div>
                                                            </th>
                                                            <th>
                                                                <div className="gl-rating-style-2"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>

                                                                    <span>(3)</span></div>
                                                            </th>
                                                            <th>
                                                                <div className="gl-rating-style-2"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i>

                                                                    <span>(3.5)</span></div>
                                                            </th>
                                                            <th>
                                                                <div className="gl-rating-style-2"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>

                                                                    <span>(4)</span></div>
                                                            </th>
                                                            <th>
                                                                <div className="gl-rating-style-2"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i>

                                                                    <span>(4.5)</span></div>
                                                            </th>
                                                            <th>
                                                                <div className="gl-rating-style-2"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>

                                                                    <span>(5)</span></div>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>

                                                                
                                                                <div className="radio-box">

                                                                    <input type="radio" id="star-1" name="rating" />
                                                                    <div className="radio-box__state radio-box__state--primary">

                                                                        <label className="radio-box__label" htmlFor="star-1"></label></div>
                                                                </div>
                                                                
                                                            </td>
                                                            <td>

                                                                
                                                                <div className="radio-box">

                                                                    <input type="radio" id="star-1.5" name="rating" />
                                                                    <div className="radio-box__state radio-box__state--primary">

                                                                        <label className="radio-box__label" htmlFor="star-1.5"></label></div>
                                                                </div>
                                                                
                                                            </td>
                                                            <td>

                                                                
                                                                <div className="radio-box">

                                                                    <input type="radio" id="star-2" name="rating" />
                                                                    <div className="radio-box__state radio-box__state--primary">

                                                                        <label className="radio-box__label" htmlFor="star-2"></label></div>
                                                                </div>
                                                                
                                                            </td>
                                                            <td>

                                                                
                                                                <div className="radio-box">

                                                                    <input type="radio" id="star-2.5" name="rating" />
                                                                    <div className="radio-box__state radio-box__state--primary">

                                                                        <label className="radio-box__label" htmlFor="star-2.5"></label></div>
                                                                </div>
                                                                
                                                            </td>
                                                            <td>

                                                                
                                                                <div className="radio-box">

                                                                    <input type="radio" id="star-3" name="rating" />
                                                                    <div className="radio-box__state radio-box__state--primary">

                                                                        <label className="radio-box__label" htmlFor="star-3"></label></div>
                                                                </div>
                                                                
                                                            </td>
                                                            <td>

                                                                
                                                                <div className="radio-box">

                                                                    <input type="radio" id="star-3.5" name="rating" />
                                                                    <div className="radio-box__state radio-box__state--primary">

                                                                        <label className="radio-box__label" htmlFor="star-3.5"></label></div>
                                                                </div>
                                                                
                                                            </td>
                                                            <td>

                                                                
                                                                <div className="radio-box">

                                                                    <input type="radio" id="star-4" name="rating" />
                                                                    <div className="radio-box__state radio-box__state--primary">

                                                                        <label className="radio-box__label" htmlFor="star-4"></label></div>
                                                                </div>
                                                                
                                                            </td>
                                                            <td>

                                                                
                                                                <div className="radio-box">

                                                                    <input type="radio" id="star-4.5" name="rating" />
                                                                    <div className="radio-box__state radio-box__state--primary">

                                                                        <label className="radio-box__label" htmlFor="star-4.5"></label></div>
                                                                </div>
                                                                
                                                            </td>
                                                            <td>

                                                                
                                                                <div className="radio-box">

                                                                    <input type="radio" id="star-5" name="rating" />
                                                                    <div className="radio-box__state radio-box__state--primary">

                                                                        <label className="radio-box__label" htmlFor="star-5"></label></div>
                                                                </div>
                                                                
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="rev-f2__group">
                                            <div className="u-s-m-b-15">

                                                <label className="gl-label" htmlFor="reviewer-text">YOUR REVIEW *</label><textarea className="text-area text-area--primary-style" id="reviewer-text"></textarea></div>
                                            <div>
                                                <p className="u-s-m-b-30">

                                                    <label className="gl-label" htmlFor="reviewer-name">NAME *</label>

                                                    <input className="input-text input-text--primary-style" type="text" id="reviewer-name" /></p>
                                                <p className="u-s-m-b-30">

                                                    <label className="gl-label" htmlFor="reviewer-email">EMAIL *</label>

                                                    <input className="input-text input-text--primary-style" type="text" id="reviewer-email" /></p>
                                            </div>
                                        </div>
                                        <div>

                                            <button className="btn btn--e-brand-shadow" type="submit">SUBMIT</button></div>
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

<div className="u-s-p-b-90">

    
    <div className="section__intro u-s-m-b-46">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section__text-wrap">
                        <h1 className="section__heading u-c-secondary u-s-m-b-12">CUSTOMER ALSO VIEWED</h1>

                        <span className="section__span u-c-grey">PRODUCTS THAT CUSTOMER VIEWED</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    


    
    <div className="section__content">
        <div className="container">
            <div className="slider-fouc">
                <div className="owl-carousel product-slider" data-item="4">
                    <div className="u-s-m-b-30">
                        <div className="product-o product-o--hover-on">
                            <div className="product-o__wrap">

                                <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                                    <img className="aspect__img" src="images/product/electronic/product1.jpg" alt="" /></a>
                                <div className="product-o__action-wrap">
                                    <ul className="product-o__action-list">
                                        <li>

                                            <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i className="fas fa-search-plus"></i></a></li>
                                        <li>

                                            <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-plus-circle"></i></a></li>
                                        <li>

                                            <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i className="fas fa-heart"></i></a></li>
                                        <li>

                                            <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops"><i className="fas fa-envelope"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                            <span className="product-o__category">

                                <a href="shop-side-version-2.html">Electronics</a></span>

                            <span className="product-o__name">

                                <a href="product-detail.html">Beats Bomb Wireless Headphone</a></span>
                            <div className="product-o__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>

                                <span className="product-o__review">(20)</span></div>

                            <span className="product-o__price">$125.00

                                <span className="product-o__discount">$160.00</span></span>
                        </div>
                    </div>
                    <div className="u-s-m-b-30">
                        <div className="product-o product-o--hover-on">
                            <div className="product-o__wrap">

                                <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                                    <img className="aspect__img" src="images/product/electronic/product2.jpg" alt="" /></a>
                                <div className="product-o__action-wrap">
                                    <ul className="product-o__action-list">
                                        <li>

                                            <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i className="fas fa-search-plus"></i></a></li>
                                        <li>

                                            <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-plus-circle"></i></a></li>
                                        <li>

                                            <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i className="fas fa-heart"></i></a></li>
                                        <li>

                                            <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops"><i className="fas fa-envelope"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                            <span className="product-o__category">

                                <a href="shop-side-version-2.html">Electronics</a></span>

                            <span className="product-o__name">

                                <a href="product-detail.html">Red Wireless Headphone</a></span>
                            <div className="product-o__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>

                                <span className="product-o__review">(20)</span></div>

                            <span className="product-o__price">$125.00

                                <span className="product-o__discount">$160.00</span></span>
                        </div>
                    </div>
                    <div className="u-s-m-b-30">
                        <div className="product-o product-o--hover-on">
                            <div className="product-o__wrap">

                                <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                                    <img className="aspect__img" src="images/product/electronic/product3.jpg" alt="" /></a>
                                <div className="product-o__action-wrap">
                                    <ul className="product-o__action-list">
                                        <li>

                                            <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i className="fas fa-search-plus"></i></a></li>
                                        <li>

                                            <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-plus-circle"></i></a></li>
                                        <li>

                                            <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i className="fas fa-heart"></i></a></li>
                                        <li>

                                            <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops"><i className="fas fa-envelope"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                            <span className="product-o__category">

                                <a href="shop-side-version-2.html">Electronics</a></span>

                            <span className="product-o__name">

                                <a href="product-detail.html">Yellow Wireless Headphone</a></span>
                            <div className="product-o__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>

                                <span className="product-o__review">(20)</span></div>

                            <span className="product-o__price">$125.00

                                <span className="product-o__discount">$160.00</span></span>
                        </div>
                    </div>
                    <div className="u-s-m-b-30">
                        <div className="product-o product-o--hover-on">
                            <div className="product-o__wrap">

                                <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                                    <img className="aspect__img" src="images/product/electronic/product23.jpg" alt="" /></a>
                                <div className="product-o__action-wrap">
                                    <ul className="product-o__action-list">
                                        <li>

                                            <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i className="fas fa-search-plus"></i></a></li>
                                        <li>

                                            <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-plus-circle"></i></a></li>
                                        <li>

                                            <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i className="fas fa-heart"></i></a></li>
                                        <li>

                                            <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops"><i className="fas fa-envelope"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                            <span className="product-o__category">

                                <a href="shop-side-version-2.html">Electronics</a></span>

                            <span className="product-o__name">

                                <a href="product-detail.html">Razor Gear Ultra Slim 8GB Ram</a></span>
                            <div className="product-o__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>

                                <span className="product-o__review">(20)</span></div>

                            <span className="product-o__price">$125.00

                                <span className="product-o__discount">$160.00</span></span>
                        </div>
                    </div>
                    <div className="u-s-m-b-30">
                        <div className="product-o product-o--hover-on">
                            <div className="product-o__wrap">

                                <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                                    <img className="aspect__img" src="images/product/electronic/product26.jpg" alt="" /></a>
                                <div className="product-o__action-wrap">
                                    <ul className="product-o__action-list">
                                        <li>

                                            <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i className="fas fa-search-plus"></i></a></li>
                                        <li>

                                            <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-plus-circle"></i></a></li>
                                        <li>

                                            <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i className="fas fa-heart"></i></a></li>
                                        <li>

                                            <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops"><i className="fas fa-envelope"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                            <span className="product-o__category">

                                <a href="shop-side-version-2.html">Electronics</a></span>

                            <span className="product-o__name">

                                <a href="product-detail.html">Razor Gear Ultra Slim 12GB Ram</a></span>
                            <div className="product-o__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>

                                <span className="product-o__review">(20)</span></div>

                            <span className="product-o__price">$125.00

                                <span className="product-o__discount">$160.00</span></span>
                        </div>
                    </div>
                    <div className="u-s-m-b-30">
                        <div className="product-o product-o--hover-on">
                            <div className="product-o__wrap">

                                <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                                    <img className="aspect__img" src="images/product/electronic/product30.jpg" alt="" /></a>
                                <div className="product-o__action-wrap">
                                    <ul className="product-o__action-list">
                                        <li>

                                            <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i className="fas fa-search-plus"></i></a></li>
                                        <li>

                                            <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-plus-circle"></i></a></li>
                                        <li>

                                            <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i className="fas fa-heart"></i></a></li>
                                        <li>

                                            <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops"><i className="fas fa-envelope"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                            <span className="product-o__category">

                                <a href="shop-side-version-2.html">Electronics</a></span>

                            <span className="product-o__name">

                                <a href="product-detail.html">Razor Gear Ultra Slim 16GB Ram</a></span>
                            <div className="product-o__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>

                                <span className="product-o__review">(20)</span></div>

                            <span className="product-o__price">$125.00

                                <span className="product-o__discount">$160.00</span></span>
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
export default ProductPage;