import { Link  as RouteLink} from 'react-router-dom';
import { Container, Button, Grid, Paper, Typography, Link } from '@mui/material';
import FormInput from './FormInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { LoginInputSchema, loginUserType } from '../utils/schema/user';
// import LoginImage from "../images/login.svg"
import { userActions, loginThunk } from '../store/userSlice';
// import LoginImage from "../images/login.svg"

const Login = () => {

    const dispatch = useAppDispatch();
    const { loginForm } = useAppSelector((state) => state.entities.user);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm<loginUserType>({
        mode: "onChange",
        resolver: yupResolver(LoginInputSchema),
        defaultValues: loginForm,
      });
    
      const onChangeField = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        dispatch(
        userActions.setLoginForm({
            [e.target.name] : e.target.value,
          }) );
        };

      const loginUser = () => { dispatch(loginThunk(loginForm)); reset()}
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

                            <a href="signin.html">Signin</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>




<div className="u-s-p-b-60">

    
    <div className="section__intro u-s-m-b-60">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section__text-wrap">
                        <h1 className="section__heading u-c-secondary">ALREADY REGISTERED?</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    


    
    <div className="section__content">
        <div className="container">
            <div className="row row--center">
                <div className="col-lg-6 col-md-8 u-s-m-b-30">
                    <div className="l-f-o">
                        <div className="l-f-o__pad-box">
                            <h1 className="gl-h1">I'M NEW CUSTOMER</h1>

                            <span className="gl-text u-s-m-b-30">By creating an account with our store, you will be able to move through the checkout process faster, store shipping addresses, view and track your orders in your account and more.</span>
                            <div className="u-s-m-b-15">

                                <a className="l-f-o__create-link btn--e-transparent-brand-b-2" href="signup.html">CREATE AN ACCOUNT</a></div>
                            <h1 className="gl-h1">SIGNIN</h1>

                            <span className="gl-text u-s-m-b-30">If you have an account with us, please log in.</span>
                            <form className="l-f-o__form">
                                <div className="gl-s-api">
                                    <div className="u-s-m-b-15">

                                        <button className="gl-s-api__btn gl-s-api__btn--fb" type="button"><i className="fab fa-facebook-f"></i>

                                            <span>Signin with Facebook</span></button></div>
                                    <div className="u-s-m-b-15">

                                        <button className="gl-s-api__btn gl-s-api__btn--gplus" type="button"><i className="fab fa-google"></i>

                                            <span>Signin with Google</span></button></div>
                                </div>
                                <div className="u-s-m-b-30">

                                    <label className="gl-label" htmlFor="login-email">E-MAIL *</label>

                                    <input className="input-text input-text--primary-style" type="text" id="login-email" placeholder="Enter E-mail" /></div>
                                <div className="u-s-m-b-30">

                                    <label className="gl-label" htmlFor="login-password">PASSWORD *</label>

                                    <input className="input-text input-text--primary-style" type="text" id="login-password" placeholder="Enter Password" /></div>
                                <div className="gl-inline">
                                    <div className="u-s-m-b-30">

                                        <button className="btn btn--e-transparent-brand-b-2" type="submit">LOGIN</button></div>
                                    <div className="u-s-m-b-30">

                                        <a className="gl-link" href="lost-password.html">Lost Your Password?</a></div>
                                </div>
                                <div className="u-s-m-b-30">

                                    
                                    <div className="check-box">

                                        <input type="checkbox" id="remember-me" />
                                        <div className="check-box__state check-box__state--primary">

                                            <label className="check-box__label" htmlFor="remember-me">Remember Me</label></div>
                                    </div>
                                    
                                </div>
                            </form>
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

export default Login;