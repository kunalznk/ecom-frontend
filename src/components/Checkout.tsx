import { useAppDispatch, useAppSelector } from '../store/hooks';
import { placeOrder, orderActions, setOrder } from '../store/orderSlice';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addressType, address as addressSchema } from '../utils/schema/user';
import { useState } from 'react';
import { loadScript } from '../utils/utils';
import axios from 'axios';
import api from '../api';
import { useEffect } from 'react';

const paymentHandler = async (response : {
    razorpay_payment_id: string,
    razorpay_order_id: string,
    razorpay_signature: string
}, success: boolean) => {
    success  ? await axios.patch(api.paymentSuccessApi, response) : await axios.patch(api.paymentFailApi, response)
    
}


const Checkout = () => {
    const {order : OrderSlice, user} = useAppSelector((state) => state.entities)
    const [ addressToDeliver,  setAddressToDeliver]= useState<addressType>(user.user.address![0] ??  {
        /*firstName LastName Email Phone Countery */
        "addressLine1": "Roomb no 1079 bulding no 32 ",
        "addressLine2": "",
        "city": "Mumbai",
        "state": "Maharashtra",
        "pinCode": "400043",
        "addressType": "HOMES",
        "isDefault": true
        })
    const { cart, order } = OrderSlice;

    const dispatch = useAppDispatch();
    // const { address } = user.user

    const navigate = useNavigate();
        // navigate("/account", {state: { }})
    
    async function displayRazorpay() {
            const res = await loadScript(
                "https://checkout.razorpay.com/v1/checkout.js"
            );
        
            if (!res) {
                alert("Razorpay SDK failed to load. Are you online?");
                return;
            }

            const paymentObject = new (window as any).Razorpay({...order,  prefill: {
                "name": `${user.user.firstName} ${user.user.lastName}`, // user.name 
                "email": user.user.emailId, // user.email
                "contact": user.user.phoneNumber // user.contact
            },
            handler: (res: any) => paymentHandler(res, true), error: (res: any) => paymentHandler(res, false)});
            paymentObject.open();
    }
        const {
            register,
            handleSubmit,
            formState: { errors },
            reset,
          } = useForm<addressType>({
            mode: "onChange",
            resolver: yupResolver(addressSchema),
            defaultValues: addressToDeliver,
          });
        
          const onChangeField = (
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> 
          ) => {
                    setAddressToDeliver({...addressToDeliver, ...{
                    [e.target.name] : e.target.value,
                  }}) ;
                  console.log(addressToDeliver, e.target.value);
            };
    
        //   const loginUser = (e:React.FormEvent<HTMLFormElement>) => { e.preventDefault(); dispatch(loginThunk(loginForm)); reset();}
    
        useEffect(() => {
            if(order) {
                displayRazorpay().then(() => {
                    dispatch(orderActions.setOrder(undefined));
                    navigate("/account");
                })
            }
        }, [order])

    return <>
    <div className="app-content">
        <div className="u-s-p-b-60">
            <div className="section__content">
                <div className="container">
                    <div className="checkout-f">
                        <div className="row">
                            <div className="col-lg-6">
                                <h1 className="checkout-f__h1">DELIVERY INFORMATION</h1>
                                <form className="checkout-f__delivery">
                                    <div className="u-s-m-b-30">
                                        <div className="u-s-m-b-15">
                                            <div className="check-box">
                                                <input type="checkbox" id="get-address" />
                                                <div className="check-box__state check-box__state--primary">
                                                    <label className="check-box__label" htmlFor="get-address">Use default shipping and billing address from account</label></div>
                                            </div>
                                            
                                        </div>

                                        
                                        <div className="gl-inline">
                                            <div className="u-s-m-b-15">

                                                <label className="gl-label" htmlFor="billing-fname">FIRST NAME *</label>

                                                <input className="input-text input-text--primary-style" type="text" id="billing-fname" data-bill="" /></div>
                                            <div className="u-s-m-b-15">

                                                <label className="gl-label" htmlFor="billing-lname">LAST NAME *</label>

                                                <input className="input-text input-text--primary-style" type="text" id="billing-lname" data-bill="" /></div>
                                        </div>
                                        


                                        
                                        <div className="u-s-m-b-15">

                                            <label className="gl-label" htmlFor="billing-email">E-MAIL *</label>

                                            <input className="input-text input-text--primary-style" type="text" id="billing-email" data-bill="" /></div>
                                        


                                        
                                        <div className="u-s-m-b-15">

                                            <label className="gl-label" htmlFor="billing-phone">PHONE *</label>

                                            <input className="input-text input-text--primary-style" type="text" id="billing-phone" data-bill="" /></div>
                                        


                                        
                                        <div className="u-s-m-b-15">

                                            <label className="gl-label" htmlFor="billing-street">STREET ADDRESS *</label>

                                            <input className="input-text input-text--primary-style" type="text" id="billing-street" placeholder="House name and street name" data-bill="" {...register("addressLine1")} value={addressToDeliver.addressLine1} onChange={(e) => { onChangeField(e);}}/></div>
                                        <div className="u-s-m-b-15">

                                            <label htmlFor="billing-street-optional"></label>

                                            <input className="input-text input-text--primary-style" type="text" id="billing-street-optional" placeholder="Apartment, suite unit etc. (optional)" data-bill="" {...register("addressLine2")} value={addressToDeliver.addressLine2} onChange={(e) => { onChangeField(e);}}/></div>
                                        <div className="u-s-m-b-15">
                                            <label className="gl-label" htmlFor="billing-country">COUNTRY *</label>
                                            <select className="select-box select-box--primary-style" id="billing-country" data-bill="" >
                                                <option selected value="">Choose Country</option>
                                                <option value="uae">United Arab Emirate (UAE)</option>
                                                <option value="uk">United Kingdom (UK)</option>
                                                <option value="us">United States (US)</option>
                                            </select>
                                            
                                        </div>
                                        


                                        
                                        <div className="u-s-m-b-15">

                                            <label className="gl-label" htmlFor="billing-town-city">TOWN/CITY *</label>

                                            <input className="input-text input-text--primary-style" type="text" id="billing-town-city" data-bill="" {...register("city")} value={addressToDeliver.city} onChange={(e) => { onChangeField(e);}}/></div>
                                        


                                        
                                        <div className="u-s-m-b-15">

                                            

                                            <label className="gl-label" htmlFor="billing-state">STATE/PROVINCE *</label>
                                            <select className="select-box select-box--primary-style" id="billing-state" data-bill="" {...register("state")} value={addressToDeliver.state} onChange={(e) => { onChangeField(e);}}>
                                                <option selected value="">Choose State/Province</option>
                                                <option value="Alabama">Alabama</option>
                                                <option value="Alaska">Alaska</option>
                                                <option value="New York">New York</option>
                                            </select>
                                            
                                        </div>
                                        


                                        
                                        <div className="u-s-m-b-15">

                                            <label className="gl-label" htmlFor="billing-zip">ZIP/POSTAL CODE *</label>

                                            <input className="input-text input-text--primary-style" type="text" id="billing-zip" placeholder="Zip/Postal Code" data-bill="" {...register("pinCode")} value={addressToDeliver.pinCode} onChange={(e) => { onChangeField(e)}}/></div>
                                        
                                        <div className="u-s-m-b-10">

                                            
                                            <div className="check-box">

                                                <input type="checkbox" id="make-default-address" data-bill="" {...register("isDefault")} checked={addressToDeliver.isDefault} onChange={(e) => { onChangeField(e);}}/>
                                                <div className="check-box__state check-box__state--primary">

                                                    <label className="check-box__label" htmlFor="make-default-address">Make default shipping and billing address</label></div>
                                            </div>
                                            
                                        </div>
                                        <div className="u-s-m-b-10">

                                            <a className="gl-link" href="#create-account" data-toggle="collapse">Want to create a new account?</a></div>
                                        <div className="collapse u-s-m-b-15" id="create-account">

                                            <span className="gl-text u-s-m-b-15">Create an account by entering the information below. If you are a returning customer please login at the top of the page.</span>
                                            <div>

                                                <label className="gl-label" htmlFor="reg-password">Account Password *</label>

                                                <input className="input-text input-text--primary-style" type="text" data-bill id="reg-password" /></div>
                                        </div>
                                        <div className="u-s-m-b-10">

                                            <label className="gl-label" htmlFor="order-note">ORDER NOTE</label><textarea className="text-area text-area--primary-style" id="order-note"></textarea></div>
                                        <div>

                                            <button className="btn btn--e-transparent-brand-b-2" onClick={(e) => e.preventDefault()}>SAVE</button></div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-6">
                                <h1 className="checkout-f__h1">ORDER SUMMARY</h1>

                                
                                <div className="o-summary">
                                    <div className="o-summary__section u-s-m-b-30">
                                        <div className="o-summary__item-wrap gl-scroll">
                                            {cart?.products.map((prod) => <div className="o-card">
                                                <div className="o-card__flex">
                                                    <div className="o-card__img-wrap">
                                                        <img className="u-img-fluid" src={prod.main_image} alt="" /></div>
                                                    <div className="o-card__info-wrap">

                                                        <span className="o-card__name">

                                                            <a href="product-detail.html">{prod.title}</a></span>

                                                        <span className="o-card__quantity">{prod.quantity} x 1</span>

                                                        <span className="o-card__price">${prod.price.current_price * prod.quantity!}</span></div>
                                                </div>

                                                <a className="o-card__del far fa-trash-alt"></a>
                                            </div>)}
                                        </div>
                                    </div>
                                    
                                    <div className="o-summary__section u-s-m-b-30">
                                        <div className="o-summary__box">
                                            <table className="o-summary__table">
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
                                    </div>
                                    <div className="o-summary__section u-s-m-b-30">
                                        <div className="o-summary__box">
                                            <h1 className="checkout-f__h1">PAYMENT INFORMATION</h1>
                                            <div className="checkout-f__payment">
                                                <div className="u-s-m-b-15">

                                                    
                                                    <div className="check-box">

                                                        <input type="checkbox" id="term-and-condition" />
                                                        <div className="check-box__state check-box__state--primary">

                                                            <label className="check-box__label" htmlFor="term-and-condition">I consent to the</label></div>
                                                    </div>
                                                    

                                                    <a className="gl-link">Terms of Service.</a>
                                                </div>
                                                <div>
                                                    <button className="btn btn--e-brand-b-2" onClick={(e) => { dispatch(placeOrder({
                                                        address: addressToDeliver,
                                                        cartId: cart?._id
                                                    }))}}>PLACE ORDER</button></div>
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
    </>
}

export default Checkout;

/*
"handler":(_resp: any) => {
            //   const {razorpay_order_id, razorpay_payment_id, signature } = resp;
              // hit the api/payment/:orderId success
              "prefill": {
                "name": `${firstName} ${lastName}`, // user.name 
                "email": emailId, // user.email
                "contact": phoneNumber // user.contact
            },

            },
            "error":(_resp: any) => {
                // hit the api/payment/:orderId  fail
            },
*/