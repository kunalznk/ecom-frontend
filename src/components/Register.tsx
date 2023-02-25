import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { CreateUserInputSchema, registerUserType } from '../utils/schema/user';
import { registerThunk, userActions} from '../store/userSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { user : { registerForm, user}  , app: { error }} = useAppSelector((state) => state.entities);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm<registerUserType>({
        mode: "onBlur",
        resolver: yupResolver(CreateUserInputSchema),
        defaultValues: registerForm,
      });
    
      const onChangeField = (
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
      ) => {
        dispatch(
        userActions.setRegisterForm({
            [e.target.name] : e.target.value,
          }) );
        };

        useEffect(() => {
            if(localStorage.getItem("id")){
                navigate("/signin");
            }
        } , [error])

      const registerUser = (e:React.FormEvent<HTMLFormElement>)  => { e.preventDefault(); console.log(e); dispatch(registerThunk(registerForm)); reset(); }

    return <>
    <div className="app-content">

            
<div className="u-s-p-y-60">

    
    <div className="section__content">
        <div className="container">
            <div className="breadcrumb">
                <div className="breadcrumb__wrap">
                    <ul className="breadcrumb__list">
                        <li className="has-separator">

                            <a href="/">Home</a></li>
                        <li className="is-marked">

                            <a>Signup</a></li>
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
                        <h1 className="section__heading u-c-secondary">CREATE AN ACCOUNT</h1>
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
                            <h1 className="gl-h1">PERSONAL INFORMATION</h1>
                            <form className="l-f-o__form" onSubmit={(e) => registerUser(e)}>
                                <div className="u-s-m-b-30">

                                    <label className="gl-label" htmlFor="reg-fname">FIRST NAME *</label>

                                    <input className="input-text input-text--primary-style" type="text" id="reg-fname" placeholder="First Name" {...register("firstName")} value={registerForm.firstName} onChange={(e) => {onChangeField(e);}}/>
                                    <span className='gl-link u-s-m-t-6'>{errors.firstName?.message ?? ""}</span> 
                                    </div>
                                <div className="u-s-m-b-30">

                                    <label className="gl-label" htmlFor="reg-lname" >LAST NAME *</label>
                                    <input className="input-text input-text--primary-style" type="text" id="reg-lname" placeholder="Last Name" {...register("lastName")} value={registerForm.lastName} onChange={(e) => {onChangeField(e);}}/>
                                    <span className='gl-link u-s-m-t-6'>{errors.lastName?.message ?? ""}</span> 
                                    </div>
                                <div className="gl-inline">
                                    <div className="u-s-m-b-30">

                                        <label className="gl-label" htmlFor="gender">Role</label>
                                        <select className="select-box select-box--primary-style u-w-100" {...register("role")} value={registerForm.role} onChange={(e) => {onChangeField(e);}}>
                                            <option selected>Select</option>
                                            <option value="CUSTOMER">Customer</option>
                                            <option value="SELLER">Seller</option>
                                            <option value="DELIVERY_PARTNER">Delivery Partner</option>
                                        </select>
                                        <span className='gl-link u-s-m-t-6'>{errors.role?.message ?? ""}</span> 

                                        </div>
                                </div>
                                <div className="u-s-m-b-30">

                                    <label className="gl-label" htmlFor="reg-email">E-MAIL *</label>

                                    <input className="input-text input-text--primary-style" type="text" id="reg-email" placeholder="Enter E-mail" {...register("emailId")} value={registerForm.emailId} onChange={(e) => {onChangeField(e);}}/>
                                    <span className='gl-link u-s-m-t-6'>{errors.emailId?.message ?? ""}</span> 

                                    </div>
                                <div className="u-s-m-b-30">

                                    <label className="gl-label" htmlFor="reg-password">PASSWORD *</label>

                                    <input className="input-text input-text--primary-style" type="text" id="reg-password" placeholder="Enter Password" {...register("password")} value={registerForm.password} onChange={(e) => {onChangeField(e);}}/>
                                    <span className='gl-link u-s-m-t-6'>{errors.password?.message ?? ""}</span> 
                                </div>
                                <div className="u-s-m-b-30">

                                    <label className="gl-label" htmlFor="reg-phone">Mobile *</label>

                                    <input className="input-text input-text--primary-style" type="text" id="reg-phone" placeholder="Enter Mobile" {...register("phoneNumber")} value={registerForm.phoneNumber} onChange={(e) => {onChangeField(e);}}/>
                                    <span className='gl-link u-s-m-t-6'>{errors.phoneNumber?.message ?? ""}</span> 
                                </div>
                                <div className="u-s-m-b-15">

                                    <button className="btn btn--e-transparent-brand-b-2" type="submit">CREATE</button></div>

                                <Link className="gl-link" to="/">Return to Store</Link>
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

export default Register;