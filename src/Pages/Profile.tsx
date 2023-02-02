import { Box, Grid, Paper, Typography, Container, IconButton, Button, Avatar, Tab, Tabs } from '@mui/material';
import FormInput from '../components/FormInput';
import { useState } from 'react';
import { InputLabel } from '@mui/material';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import AnimateHeight from 'react-animate-height';
import { addressType, UserSchema, userType } from '../utils/schema/user';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useEffect } from 'react';
import { getCurrentUserThunk, updateUserByIdThunk, userActions } from '../store/userSlice';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const UserProfile = () => {
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


    return <Container maxWidth="xl" component={Paper} sx={{ padding: "2%" }}>
        {/* User Profile */}
        <Tabs value={tab} onChange={(e: React.SyntheticEvent, val: number) => {setTab(val)}}>
        <Tab label="Profile" />
        <Tab label="Orders & Invoice" />
         </Tabs>
        { !Boolean(tab) ? <Box>
         <Grid container flexDirection="column" maxWidth="md" gap="10px">
            <Grid item alignSelf="center">
                <Box  sx={{width: "100%" , height: "100px"}}>
                <Avatar  sizes="large" sx={{backgroundColor:"#23A6F0", height: "100px" , width: "100px" , fontSize: "50px"}}>H</Avatar>
                </Box>
            </Grid>
            <form>
                <Grid item>
                    <FormInput name="firstName" inputLabel="First Name" placeholder="First Name"
                        value={user.firstName}
                        error={Boolean(errors.firstName)}
                        errormsg={errors?.firstName?.message ?? " "}
                        register={register}
                        onChange={(e) => onChangeField(e)}
                    />
                </Grid>
                <Grid item>
                    <FormInput name="lastName" inputLabel="Last Name" placeholder="Last Name"
                        value={user.lastName}
                        error={Boolean(errors.lastName)}
                        errormsg={errors?.lastName?.message ?? " "}
                        register={register}
                        onChange={(e) => onChangeField(e)}
                    />
                </Grid>
                <Grid item>
                    <FormInput name="phoneNumber" inputLabel="Mobile No" placeholder="phoneNumber"
                        value={user.phoneNumber}
                        error={Boolean(errors.phoneNumber)}
                        errormsg={errors?.phoneNumber?.message ?? " "}
                        register={register}
                        onChange={(e) => onChangeField(e)}
                    />
                </Grid>
                <Grid item>
                    <FormInput name="emailId" inputLabel="Email Id" placeholder="Email ID"
                        value={user.emailId}
                        error={Boolean(errors.emailId)}
                        errormsg={errors?.emailId?.message ?? " "}
                        register={register}
                        onChange={(e) => onChangeField(e)}
                    />
                </Grid>
                <Grid item>
                    <FormInput name="password" inputLabel="Password" placeholder="Password"
                        value={user.password}
                        error={Boolean(errors.password)}
                        errormsg={errors?.password?.message ?? " "}
                        register={register}
                        onChange={(e) => onChangeField(e)}
                    />
                </Grid>
                <Grid item>
                    <FormInput name="role" inputLabel="Role" placeholder="role"
                        value={user.role}
                        error={Boolean(errors.role)}
                        errormsg={errors?.role?.message ?? " "}
                        register={register}
                        onChange={(e) => onChangeField(e)}
                    />
                </Grid>
                <Grid container item flexDirection="column" gap="5px">
                    <Grid item container justifyContent="space-between">
                        <InputLabel>
                            <Typography variant="h4">Address</Typography>
                        </InputLabel>
                        <IconButton onClick={(e) => {
                            dispatch(userActions.setUser({ address: [...user.address as unknown as any, intialAddress] }));
                            append(intialAddress)

                        }}
                        >
                            <AddTwoToneIcon />
                        </IconButton>
                    </Grid>
                    <AnimateHeight
                        height={user.address!.length > 0 ? "auto" : 0}
                        duration={500}
                    >
                        {user?.address!.map((addr, index) => <Grid container item flexDirection="column" key={index.toString()} id={index.toString()}>
                            <Grid item>
                                <FormInput name="addressLine1" inputLabel="Address Line 1" placeholder="addressLine1"
                                    value={addr.addressLine1}
                                    error={Boolean(Array.isArray(errors?.address))}
                                    errormsg={Array.isArray(errors?.address) ? errors?.address![index]?.addressLine1?.message : " "}
                                    register={register}
                                    onChange={(e) => onChangeField({...e , ...{index, ele: 0}})}
                                />
                            </Grid>
                            <Grid item>
                                <FormInput name="addressLine2" inputLabel="Address Line 2" placeholder="addressLine2"
                                    value={addr.addressLine2}
                                    error={Boolean(Array.isArray(errors?.address))}
                                    errormsg={Array.isArray(errors?.address) ? errors?.address![index]?.addressLine2?.message : " "}
                                    register={register}
                                    onChange={(e) => onChangeField({...e , ...{index, ele: 1}})}
                                />
                            </Grid>
                            <Grid container item gap="10px">
                                <Grid item>
                                    <FormInput name="city" inputLabel="City" placeholder="city"
                                        value={addr.city}
                                        error={Boolean(Array.isArray(errors?.address))}
                                        errormsg={Array.isArray(errors?.address) ? errors?.address![index]?.city?.message : " "}
                                        register={register}
                                        onChange={(e) => onChangeField({...e , ...{index, ele: 2}})}
                                        />
                                </Grid>
                                <Grid item>
                                    <FormInput name="state" inputLabel="State" placeholder="state"
                                        value={addr.state}
                                        error={Boolean(Array.isArray(errors?.address))}
                                        errormsg={Array.isArray(errors?.address) ? errors?.address![index]?.state?.message : " "}
                                        register={register}
                                        onChange={(e) => onChangeField({...e , ...{index, ele: 3}})}
                                        />
                                </Grid>
                                <Grid item>
                                    <FormInput name="pinCode" inputLabel="Pin Code" placeholder="pinCode"
                                        value={addr.pinCode}
                                        error={Boolean(Array.isArray(errors?.address))}
                                        errormsg={Array.isArray(errors?.address) ? errors?.address![index]?.pinCode?.message : " "}
                                        register={register}
                                        onChange={(e) => onChangeField({...e , ...{index, ele: 4}})}
                                        />
                                </Grid>
                            </Grid>
                            <Grid container item gap="10px">
                                <Grid item>
                                    <FormInput name="addressType" inputLabel="Addresss Type" placeholder="addressType"
                                        value={addr.addressType}
                                        error={Boolean(Array.isArray(errors?.address))}
                                        errormsg={Array.isArray(errors?.address) ? errors?.address![index]?.addressType?.message : " "}
                                        register={register}
                                        onChange={(e) => onChangeField({...e , ...{index, ele: 5}})}
                                        />
                                </Grid>
                                <Grid item>
                                    <FormInput name="isDefault" inputLabel="Default Address" placeholder="isDefault"
                                        value={addr.isDefault}
                                        error={Boolean(Array.isArray(errors?.address))}
                                        errormsg={Array.isArray(errors?.address) ? errors?.address![index]?.isDefault?.message : " "}
                                        register={register}
                                        onChange={(e) => onChangeField({...e , ...{index, ele: 6}})}
                                        />
                                </Grid>
                            </Grid>
                        </Grid>)}
                    </AnimateHeight>


                </Grid>
                <Grid item container justifyContent="center">
                    <Button variant="contained" type="button" onClick={(e) => updateUser(e)}>Save Changes</Button>
                </Grid>
            </form>
        </Grid>
      </Box> : <AnimateHeight
                        height={!Boolean(0) ? "auto" : 0}
                        duration={500}
                    ><Box>Kunal</Box></AnimateHeight>
       }
        
    </Container>


}

export default UserProfile;

