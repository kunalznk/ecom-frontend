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
    <Container maxWidth="xl"  sx={{padding:"2%" , borderRadius:"1rem" , 
    // background: `linear-gradient(to left, white, rgba(33, 33, 33, 0.5)) ,  url(${LoginImage})` , backgroundRepeat: "no-repeat", backgroundPosition:"right"
    }}>
        <Container maxWidth="lg">
        <form onSubmit={handleSubmit(loginUser)}>
        <Grid container component={Paper}  justifyContent="flex-start" gap="2rem" padding="3rem" maxWidth="500px" sx={{borderRadius:"1rem" }}>
        
        <Grid item>
        <Typography variant="h1" color="#23A6F0">Login Here</Typography></Grid>
        <Grid item container flexDirection="column" justifyContent="center">
        <Typography variant="h4">Welcome back</Typography>
        <Typography variant="h2">Sing in</Typography>
        </Grid>
        <Grid item container flexDirection="column" >
          <Grid item>  <FormInput name="emailId" inputLabel ="Email ID *" placeholder="Email ID *"  error={Boolean(errors.emailId)} errormsg={errors?.emailId?.message ?? " "}  value={loginForm.emailId} register={register}  onChange={(e) => onChangeField(e)} />
</Grid>
<Grid item>        <FormInput name="password" inputLabel ="Password" placeholder="Password"  error={Boolean(errors.password)} errormsg={errors?.password?.message ?? " "}  value={loginForm.password} register={register}  onChange={(e) => onChangeField(e)} />  
</Grid>
       </Grid>
        <Grid item container justifyContent="center">
        <Button variant="contained" type="submit" sx={{width:"180px" , borderRadius:"1rem"}}> SIGN IN  </Button>
        </Grid>
        
        <Grid item container justifyContent="center" alignItems="center" gap="5px">
        <Typography variant="subtitle2" sx={{color:"grey"}}>i don't have an account ? /</Typography>
        <RouteLink to="/signup"> <Link variant="subtitle2" underline="none" sx={{cursor:"pointer"}}>Sign up</Link></RouteLink>
        </Grid>
    </Grid>
    </form>
        </Container>
    
    </Container>
    </>
    
     
}

export default Login;