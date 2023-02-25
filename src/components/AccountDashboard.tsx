import { useAppSelector } from '../store/hooks';
const AccountDashboard = () => {

    const { user: { user }, order: { orders }} = useAppSelector((state) => state.entities)
    return <>
    <div className="col-lg-9 col-md-12">
                                    <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
                                        <div className="dash__pad-2">
                                            <h1 className="dash__h1 u-s-m-b-14">Manage My Account</h1>

                                            <span className="dash__text u-s-m-b-30">From your My Account Dashboard you have the ability to view a snapshot of your recent account activity and update your account information. Select a link below to view or edit information.</span>
                                            <div className="row">
                                                <div className="col-lg-4 u-s-m-b-30">
                                                    <div className="dash__box dash__box--bg-grey dash__box--shadow-2 u-h-100">
                                                        <div className="dash__pad-3">
                                                            <h2 className="dash__h2 u-s-m-b-8">PERSONAL PROFILE</h2>
                                                            <div className="dash__link dash__link--secondary u-s-m-b-8">

                                                                {/* <a href="dash-edit-profile.html">Edit</a> */}
                                                                </div>

                                                            <span className="dash__text">{user.firstName} {user.lastName}</span>

                                                            <span className="dash__text">{user.emailId}</span>
                                                            <div className="dash__link dash__link--secondary u-s-m-t-8">

                                                                {/* <a data-modal="modal" data-modal-id="#dash-newsletter">Subscribe Newsletter</a> */}
                                                                </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 u-s-m-b-30">
                                                    <div className="dash__box dash__box--bg-grey dash__box--shadow-2 u-h-100">
                                                        <div className="dash__pad-3">
                                                            <h2 className="dash__h2 u-s-m-b-8">ADDRESS BOOK</h2>

                                                            <span className="dash__text-2 u-s-m-b-8">Default Shipping Address</span>
                                                            <div className="dash__link dash__link--secondary u-s-m-b-8">

                                                                {/* <a href="dash-address-book.html">Edit</a> */}
                                                                </div>

                                                            <span className="dash__text">{user.address![0].addressLine1 } {user.address![0].addressLine2 }</span>

                                                            <span className="dash__text">{user.phoneNumber}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className="col-lg-4 u-s-m-b-30">
                                                    <div className="dash__box dash__box--bg-grey dash__box--shadow-2 u-h-100">
                                                        <div className="dash__pad-3">
                                                            <h2 className="dash__h2 u-s-m-b-8">BILLING ADDRESS</h2>

                                                            <span className="dash__text-2 u-s-m-b-8">Default Billing Address</span>

                                                            <span className="dash__text">4247 Ashford Drive Virginia - VA-20006 - USA</span>

                                                            <span className="dash__text">(+0) 900901904</span>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dash__box dash__box--shadow dash__box--bg-white dash__box--radius">
                                        <h2 className="dash__h2 u-s-p-xy-20">RECENT ORDERS</h2>
                                        <div className="dash__table-wrap gl-scroll">
                                            <table className="dash__table">
                                                <thead>
                                                    <tr>
                                                        <th>Order #</th>
                                                        <th>Placed On</th>
                                                        <th>Items</th>
                                                        <th>Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {orders?.map((order) =>  <tr>
                                                        <td>{order._id}</td>
                                                        <td>{order.invoice}</td>
                                                        <td>
                                                            <div className="dash__table-img-wrap">
                                                                <img className="u-img-fluid" src={order?.products[0].main_image} alt="" /></div>
                                                        </td>
                                                        <td>
                                                            <div className="dash__table-total">

                                                                <span>{order.status}</span>
                                                                <div className="dash__link dash__link--brand">

                                                                    <a>{order.status}</a></div>
                                                            </div>
                                                        </td>
                                                    </tr>)}
                                                   
                                                    
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
    </div>
    </>
}

export default AccountDashboard;