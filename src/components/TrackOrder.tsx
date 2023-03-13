const TrackOrder = () => {
    return <>
    <div className="col-lg-9 col-md-12">
                                    <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white">
                                        <div className="dash__pad-2">
                                            <h1 className="dash__h1 u-s-m-b-14">Yet To Implement </h1>

                                            {/* <span className="dash__text u-s-m-b-30">To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</span>
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
                                            </form> */}
                                        </div>
                                    </div>
                                    {/* <h1 className="dash__h1 u-s-m-b-30">Order Details</h1>
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
                                    </div> */}
    </div>
    {/* <div className="col-lg-9 col-md-12">
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
    </div> */}
    </>
}

export default TrackOrder;