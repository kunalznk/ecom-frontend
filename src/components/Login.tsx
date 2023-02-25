import { Link } from 'react-router-dom';
import { Container, Button, Grid, Paper, Typography } from '@mui/material';
import FormInput from './FormInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { LoginInputSchema, loginUserType } from '../utils/schema/user';
import { userActions, loginThunk } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Login = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { user: {loginForm, user}, app: {token} } = useAppSelector((state) => state.entities);

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

      const loginUser = (e:React.FormEvent<HTMLFormElement>) => { e.preventDefault(); dispatch(loginThunk(loginForm)); reset();}
      useEffect(() => {
        if(token){
            navigate("/");
        }
    } , [token])

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
                                <h1 className="gl-h1">SIGNIN</h1>
                                <form className="l-f-o__form" onSubmit={(e)=> {loginUser(e);}}>
                                        <div className="u-s-m-b-30">
                                            <label className="gl-label" htmlFor="login-email">E-MAIL *</label>

                                            <input className="input-text input-text--primary-style" type="text" id="login-email" placeholder="Enter E-mail" value={loginForm.emailId} {...register("emailId")} onChange={(e) => { onChangeField(e);}}/>
                                            <span className='gl-link u-s-m-t-6'>{errors.emailId?.message ?? ""}</span> 

                                            </div>
                                        <div className="u-s-m-b-30">

                                            <label className="gl-label" htmlFor="login-password">PASSWORD *</label>

                                            <input className="input-text input-text--primary-style" type="text" id="login-password" placeholder="Enter Password" value={loginForm.password} {...register("password")} onChange={(e) => { onChangeField(e);}}/>
                                            <span className='gl-link u-s-m-t-6'>{errors.password?.message ?? ""}</span> 
                                            </div>
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
                                    <h1 className="gl-h1">I'M NEW CUSTOMER</h1>

                                    <span className="gl-text u-s-m-b-30">By creating an account with our store, you will be able to move through the checkout process faster, store shipping addresses, view and track your orders in your account and more.</span>
                                    <div className="u-s-m-b-15">

                                        <Link to="/signup" className="l-f-o__create-link btn--e-transparent-brand-b-2">CREATE AN ACCOUNT</Link></div>                                    
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