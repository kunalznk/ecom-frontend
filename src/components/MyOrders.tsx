
import { useAppSelector } from '../store/hooks';
import { useEffect } from 'react';
import { fetchOrders } from '../store/orderSlice';
const MyOrders = () => {

    useEffect(() => {
        fetchOrders();
    }, [])
    const { orders } = useAppSelector((state) => state.entities.order);
    
    return <>
    <div className="col-lg-9 col-md-12">
                            <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
                                <div className="dash__pad-2">
                                    <h1 className="dash__h1 u-s-m-b-14">My Orders</h1>

                                    <span className="dash__text u-s-m-b-30">Here you can see all products that have been delivered.</span>
                                    {/* <form className="m-order u-s-m-b-30">
                                        <div className="m-order__select-wrapper">

                                            <label className="u-s-m-r-8" htmlFor="my-order-sort">Show:</label><select className="select-box select-box--primary-style" id="my-order-sort">
                                                <option selected>Last 5 orders</option>
                                                <option>Last 15 days</option>
                                                <option>Last 30 days</option>
                                                <option>Last 6 months</option>
                                                <option>Orders placed in 2018</option>
                                                <option>All Orders</option>
                                        </select></div>
                                    </form> */}
                                    <div className="m-order__list">
                                        {orders?.map((order) =>  <div className="m-order__get">
                                            <div className="manage-o__header u-s-m-b-30">
                                                <div className="dash-l-r">
                                                    <div>
                                                        <div className="manage-o__text-2 u-c-secondary">Order {order._id}</div>
                                                        <div className="manage-o__text u-c-silver">Placed on 26 Oct 2016 09:08:37</div>
                                                    </div>
                                                    <div>
                                                        <div className="dash__link dash__link--brand">

                                                            <a>MANAGE</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="manage-o__description">
                                                <div className="description__container">
                                                    <div className="description__img-wrap">

                                                        <img className="u-img-fluid" src="images/product/electronic/product3.jpg" alt="" /></div>
                                                    <div className="description-title">{order.products[0].title}</div>
                                                </div>
                                                <div className="description__info-wrap">
                                                    <div>

                                                        <span className={`manage-o__badge" ${order.status == ""  ? "badge--processing" : "badge--shipped"}`}>{order.status == ""  ? "Processing" : "Shipped"}</span></div>
                                                    <div>

                                                        <span className="manage-o__text-2 u-c-silver">Quantity:

                                                            <span className="manage-o__text-2 u-c-secondary">{order.products[0].quantity}</span></span></div>
                                                    <div>

                                                        <span className="manage-o__text-2 u-c-silver">Total:

                                                            <span className="manage-o__text-2 u-c-secondary">$16.00</span></span></div>
                                                </div>
                                            </div>
                                        </div>)}
                                    </div>
                                </div>
                            </div>
    </div>
    </>
}

export default MyOrders;