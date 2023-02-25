import { useState, useEffect } from 'react';
import EditAddress from './EditAddress';
import NewAddress from './NewAddress';
import { useAppSelector } from '../store/hooks';
const AddressBook = () => {
    const [edit , setEdit ] = useState(false)
    const [add , setAdd ] = useState(false)
    const { user } = useAppSelector((state) => state.entities.user)
    const [ index , setIndex ] = useState<number>(-1)

    useEffect(() => {}, [edit , add])
    return <>
    {index < 0 &&<div className="col-lg-9 col-md-12">
                                    <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
                                        <div className="dash__pad-2">
                                            <div className="dash__address-header">
                                                <h1 className="dash__h1">Address Book</h1>
                                                <div>

                                                    <span className="dash__link dash__link--black u-s-m-r-8">

                                                        <a href="dash-address-make-default.html">Make default shipping address</a></span>

                                                    <span className="dash__link dash__link--black">

                                                        <a href="dash-address-make-default.html">Make default shipping address</a></span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dash__box dash__box--shadow dash__box--bg-white dash__box--radius u-s-m-b-30">
                                        <div className="dash__table-2-wrap gl-scroll">
                                            <table className="dash__table-2">
                                                <thead>
                                                    <tr>
                                                        <th>Action</th>
                                                        <th>Full Name</th>
                                                        <th>Address</th>
                                                        <th>Region</th>
                                                        <th>Phone Number</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {user.address!.map((addr, index) => <tr>
                                                        <td>
                                                            <a className="address-book-edit btn--e-transparent-platinum-b-2" onClick={() => {setIndex(index); }}>Edit</a>
                                                        </td>
                                                        <td>{user.firstName} {user.lastName}</td>
                                                        <td>{addr.addressLine1}</td>
                                                        <td>{addr.addressLine2}</td>
                                                        <td>{addr.pinCode}</td>
                                                        <td>
                                                            {addr.isDefault &&  <div className="gl-text">Default Shipping Address</div>}
                                                        </td>
                                                    </tr>)}
                                                    </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div>

                                        <a className="dash__custom-link btn--e-brand-b-2" onClick={() => setIndex(user.address?.length!)}><i className="fas fa-plus u-s-m-r-8"></i>

                                            <span>Add New Address</span></a></div>
     </div>}
    { index >= 0 && <NewAddress index={index} setIndex={setIndex}/> }
    </>
}

export default AddressBook;