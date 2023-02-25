import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addressType, address as addressSchema } from '../utils/schema/user';
import { useNavigate } from 'react-router-dom';
import { updateUserByIdThunk, userActions } from '../store/userSlice';
const NewAddress = (props:any) => {
    const { setIndex, index } = props;
    const { user } = useAppSelector((state) => state.entities.user)

    const [ addressToDeliver,  setAddressToDeliver]= useState<addressType>(user.address![index] ??  {
        /*firstName LastName Email Phone Countery */
        "addressLine1": "",
        "addressLine2": "",
        "city": "",
        "state": "",
        "pinCode": "",
        "addressType": "",
        "isDefault": true
    })
    const dispatch = useAppDispatch();
   
        const navigate = useNavigate();
        // navigate("/account", {state: { }})
    
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
            };

    
    return <>
    <div className="col-lg-9 col-md-12">
                                    <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white">
                                        <div className="dash__pad-2">
                                            <h1 className="dash__h1 u-s-m-b-14">{index ? "Edit" : "Add new"} Address</h1>

                                            <span className="dash__text u-s-m-b-30">We need an address where we could deliver products.</span>
                                            <form className="dash-address-manipulation">
                                                <div className="gl-inline">
                                                    <div className="u-s-m-b-30">

                                                        <label className="gl-label" htmlFor="address-fname">FIRST NAME *</label>

                                                        <input className="input-text input-text--primary-style" type="text" id="address-fname" placeholder="First Name" value={user.firstName}/></div>
                                                    <div className="u-s-m-b-30">

                                                        <label className="gl-label" htmlFor="address-lname">LAST NAME *</label>

                                                        <input className="input-text input-text--primary-style" type="text" id="address-lname" placeholder="Last Name" value={user.lastName}/></div>
                                                </div>
                                                <div className="gl-inline">
                                                    <div className="u-s-m-b-30">

                                                        <label className="gl-label" htmlFor="address-phone">PHONE *</label>

                                                        <input className="input-text input-text--primary-style" type="text" id="address-phone" value={user.phoneNumber}/></div>
                                                    <div className="u-s-m-b-30">

                                                        <label className="gl-label" htmlFor="address-street">Email ID *</label>

                                                        <input className="input-text input-text--primary-style" type="text" id="address-street" placeholder="user@example.com" value={user.emailId}/></div>
                                                </div>
                                                <div className="gl-inline">
                                                    <div className="u-s-m-b-30">

                                                        <label className="gl-label" htmlFor="address-phone">STREET ADDRESS *</label>

                                                        <input className="input-text input-text--primary-style" type="text" id="address-street1" placeholder="Addrees Line 1"{...register("addressLine1")} value={addressToDeliver.addressLine1} onChange={(e) => { onChangeField(e);}}/></div>
                                                    <div className="u-s-m-b-30" style={{marginTop:"20px"}}>

                                                        <label className="gl-label mt-2" htmlFor="address-street"></label>

                                                        <input className="input-text input-text--primary-style" type="text" id="address-street" placeholder="Addrees Line 2" {...register("addressLine2")} value={addressToDeliver.addressLine2} onChange={(e) => { onChangeField(e);}}/></div>
                                                </div>
                                                <div className="gl-inline">
                                                    <div className="u-s-m-b-30">

                                                        

                                                        <label className="gl-label" htmlFor="address-country">Address Type *</label><select className="select-box select-box--primary-style" id="address-country"{...register("addressType")} value={addressToDeliver.addressType} onChange={(e) => { onChangeField(e);}}>
                                                            <option selected value="">Choose</option>
                                                            <option value="home">Home</option>
                                                            <option value="office">OFFICE</option>
                                                        </select>
                                                        
                                                    </div>
                                                    <div className="u-s-m-b-30">
                                                        <label className="gl-label" htmlFor="address-state">STATE/PROVINCE *</label><select className="select-box select-box--primary-style" id="address-state" {...register("state")} value={addressToDeliver.state} onChange={(e) => { onChangeField(e);}}>
                                                            <option selected value="">Choose State/Province</option>
                                                            <option value="al">Alabama</option>
                                                            <option value="al">Alaska</option>
                                                            <option value="ny">New York</option>
                                                        </select>
                                                        
                                                    </div>
                                                </div>
                                                <div className="gl-inline">
                                                    <div className="u-s-m-b-30">

                                                        <label className="gl-label" htmlFor="address-city">TOWN/CITY *</label>

                                                        <input className="input-text input-text--primary-style" type="text" id="address-city" {...register("city")} value={addressToDeliver.city} onChange={(e) => { onChangeField(e);}}/></div>
                                                    <div className="u-s-m-b-30">

                                                        <label className="gl-label" htmlFor="address-street">ZIP/POSTAL CODE *</label>

                                                        <input className="input-text input-text--primary-style" type="text" id="address-postal" placeholder="Zip/Postal Code" {...register("pinCode")} value={addressToDeliver.pinCode} onChange={(e) => { onChangeField(e);}}/></div>
                                                </div>

                                                <button className="btn btn--e-brand-b-2" onClick={(e) => {
                                                    e.preventDefault(); 
                                                    let userAddr = user.address?.filter(() => true);
                                                    console.log(userAddr![index])
                                                    if(userAddr) {
                                                        if(index < userAddr.length){
                                                            userAddr[index]  = addressToDeliver;
                                                        } else {
                                                            userAddr = [...userAddr, addressToDeliver]
                                                        }
                                                    }
                                                    console.log(userAddr);
                                                    dispatch(updateUserByIdThunk({ ...user, address: userAddr}));
                                                    setIndex(-1);
                                                    
                                                    }}>SAVE</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
    
    </>
}

export default NewAddress;