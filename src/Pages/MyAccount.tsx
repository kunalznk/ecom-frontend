import { Box, Grid, Paper, Typography, Container, IconButton, Button, Avatar, Tab, Tabs, CardContent, Card } from '@mui/material';
import FormInput from '../components/FormInput';
import { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { addressType, UserSchema, userType } from '../utils/schema/user';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useEffect } from 'react';
import { getCurrentUserThunk, updateUserByIdThunk, userActions } from '../store/userSlice';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import MyProfile from '../components/MyProfile';
import EditProfile from '../components/EditProfile';
import AddressBook from '../components/AddressBook';
import NewAddress from '../components/NewAddress';
import EditAddress from '../components/EditAddress';
import MyOrders from '../components/MyOrders';
import ReturnAndCancel from '../components/ReturnAndCancel';
import TrackOrder from '../components/TrackOrder';
import AccountDashboard from '../components/AccountDashboard';



const MyAccount = () => {
    const [isEdit, setIsEdit] = useState(false)
    const [tab , setTab ] = useState<number>(0)
    const intialAddress = {
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        pinCode: "",
        addressType: "",
        isDefault: false,

    };
    const { user } = useAppSelector(state => state.entities.user);
    const [address, setAddress] = useState<addressType[]>([intialAddress!])
    const dispatch = useAppDispatch();




    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
        setError,
        clearErrors
        
    } = useForm<userType>({
        mode: "onChange",
        // resolver: yupResolver(UserSchema),
    });
    const { fields, append, remove } = useFieldArray({ name: 'address', control })
    const addresses = watch('address')

    const updateUser = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        try {
            e.preventDefault();
            clearErrors();
            UserSchema.validateSync(user);
            dispatch(updateUserByIdThunk(user));
            reset()
            
        } catch (error: any ) {
            setError(error.path, {
                message: error.message,
                type: error.type
             }, {shouldFocus: false})

        }
      
    }

    const onChangeField = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> & {index ?: number, ele ?: number }
    ) => {
       if(e.ele! >= 0 && e.index! >= 0) {
        let tempAddr  = JSON.parse(JSON.stringify(user?.address!))  as unknown as any;
        tempAddr[e.index!][e.target.name] = e.target.value;
        dispatch(
            userActions.setUser({
                "address": tempAddr,
            }));
       } else {
        dispatch(
            userActions.setUser({
                [e.target.name]: e.target.value,
            }));
        }
    };


    return  <>
    <div className="app-content">
        <div className="u-s-p-y-60">
        <div className="section__content">
            <div className="container">
                <div className="breadcrumb">
                    <div className="breadcrumb__wrap">
                        <ul className="breadcrumb__list">
                            <li className="has-separator">
                                <a href="index.html">Home</a>
                            </li>
                            <li className="is-marked">
                                <a href="dash-my-profile.html">My Account</a></li>
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
                                    <span className="dash__text u-s-m-b-16">Hello, Firstname Lastname</span>
                                    <ul className="dash__f-list">
                                        {["Manage My Account", "My Profile","Address Book","Track Order", "My Orders",
                                         "My Returns & Cancellations"].map((option, index) => <li onClick={() => setTab(index)}><a className={tab === index ? "dash-active" : ""}>{option}</a></li>)}
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
                            {/* Manage My Account", "My Profile","Address Book","Track Order", "My Orders",
                                        "My Payment Options", "My Returns & Cancellations */}
                        {tab === 0 && <AccountDashboard />}                
                        {tab === 1 && <MyProfile />}
                        {tab === 2 && <AddressBook />}
                        {tab === 3 && <TrackOrder />}
                        {tab === 4 && <MyOrders />}
                        {tab === 5 && <ReturnAndCancel />}
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    
    </div>


</>
}

export default MyAccount;

