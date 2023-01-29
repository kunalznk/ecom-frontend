import { Link  as RouteLink} from 'react-router-dom';
import { Container, Button, Grid, Paper, Typography, Link } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { CreateUserInputSchema, registerUserType } from '../utils/schema/user';
import FormInput from './FormInput';
// import LoginImage from "../images/login.svg"
import { registerThunk, userActions} from '../store/userSlice';

const Register = () => {

    const dispatch = useAppDispatch();
    const { registerForm } = useAppSelector((state) => state.entities.user);

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
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        dispatch(
        userActions.setRegisterForm({
            [e.target.name] : e.target.value,
          }) );
        };

      const registerUser = () => { dispatch(registerThunk(registerForm)); reset(); }

    return <>
    <Container maxWidth="xl"  sx={{padding:"2%" , borderRadius:"1rem"}}>
        <Container maxWidth="lg">
        <form onSubmit={handleSubmit(registerUser)}>
        <Grid container component={Paper}  justifyContent="flex-start" gap="2rem"  padding="3rem"  sx={{borderRadius:"1rem" }} maxWidth="630px">
        <Grid item>
        <Typography variant="h1" color="#23A6F0">Reigster Here</Typography></Grid>
        <Grid item container flexDirection="column">
        <Typography variant="h4">Welcome</Typography>
        <Typography variant="h2">Sign up</Typography>
        </Grid>
        <Grid item container flexDirection="column">
            <Grid item container gap="2%">
            <Grid item> 
            <FormInput name="firstName" inputLabel="First Name"  placeholder="First Name"   error={Boolean(errors.firstName)} errormsg={errors?.firstName?.message  ??  " "}  value={registerForm.firstName} register={register}  onChange={(e) => onChangeField(e)} />
            </Grid>
            <Grid item> 
                <FormInput  name="lastName" inputLabel ="Last Name" placeholder="Last Name"  error={Boolean(errors.lastName)} errormsg={errors?.lastName?.message ?? " "}  value={registerForm.lastName} register={register}  onChange={(e) => onChangeField(e)} /> 
                </Grid>
            </Grid>

            <Grid item container  gap="2%">
            <Grid item><FormInput name="emailId" inputLabel ="Email ID *" placeholder="Email ID *"  error={Boolean(errors.emailId)} errormsg={errors?.emailId?.message ?? " "}  value={registerForm.emailId} register={register}  onChange={(e) => onChangeField(e)} /></Grid>
            <Grid item><FormInput name="password" inputLabel ="Password" placeholder="Password"  error={Boolean(errors.password)} errormsg={errors?.password?.message ?? " "}  value={registerForm.password} register={register}  onChange={(e) => onChangeField(e)} /></Grid>
            </Grid>

            <Grid item container  gap="2%">
            <Grid item><FormInput name="phoneNumber" inputLabel ="Mobile" placeholder="1234567890"  error={Boolean(errors.phoneNumber)} errormsg={errors?.phoneNumber?.message ?? " "}  value={registerForm.phoneNumber} register={register}  onChange={(e) => onChangeField(e)} /></Grid>
            <Grid item><FormInput name="role" inputLabel ="Role" placeholder="Select a Role"  error={Boolean(errors.role)} errormsg={errors?.role?.message ?? " "}  value={registerForm.role} register={register}  onChange={(e) => onChangeField(e)} /></Grid>
            </Grid>
       </Grid>
        <Grid item container justifyContent="center">
        <Button variant="contained" type="submit" sx={{width:"180px" , borderRadius:"1rem"}}> SIGN UP  </Button>
        </Grid>
        <Grid item container justifyContent="center" alignItems="center" gap="5px">
        <Typography variant="subtitle2" sx={{color:"grey"}}>have an account ? /</Typography>
        <RouteLink to="/signin">
        <Link variant="subtitle2" underline="hover" sx={{cursor:"pointer"}} >Log in</Link>
        </RouteLink>
          </Grid>
    </Grid>
    </form>
        </Container>
    
    </Container>
    </>
    
     
}

export default Register;