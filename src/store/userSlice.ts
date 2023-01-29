import { createAsyncThunk, createSlice, PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit";
import axios from "axios";

import { loginUserType, registerUserType, userType } from "../utils/schema/user";

import api from "../api"

type userSliceType = {
    registerForm: registerUserType,
    loginForm: loginUserType,
    user: userType
}

const initialState : userSliceType = {
    registerForm: {
        firstName:"",
        lastName:"",
        emailId:"",
        password:"",
        phoneNumber:"",
        role:""
    },
    loginForm:{
        emailId:"",
        password:"",
    },
    user:{
        id:"",
        firstName:"",
        lastName:"",
        emailId:"",
        password:"",
        phoneNumber:"",
        role:"",
        address:[]
    }
}

const reducers : SliceCaseReducers<userSliceType> =  {
    setUser : (state , action: PayloadAction<userType>) => {
        state.user = {...state.user, ...action.payload}
    },
    setLoginForm : (state , action: PayloadAction<loginUserType>) => {
        state.loginForm = {...state.loginForm, ...action.payload}
    },
    setRegisterForm : (state , action: PayloadAction<registerUserType>) => {
        state.registerForm = {...state.registerForm, ...action.payload}
    },
}

const userSlice = createSlice<userSliceType , SliceCaseReducers<userSliceType>>({
    name: 'user',
    initialState,
    reducers,
});

export const userActions =  userSlice.actions;
export const userReducer = userSlice.reducer;

export const loginThunk = createAsyncThunk("login" , async  ( loginForm: loginUserType ,{ getState , rejectWithValue, fulfillWithValue, dispatch,   }) => {
    try {
    const res = await axios.post(api.loginApi,  loginForm );
    dispatch(userActions.setLoginForm(initialState.loginForm));

    if( res.status === 200 &&  res.data?.status === "SUCCESS") {
        localStorage.setItem("token", res.data.data.token);
        return fulfillWithValue(res.data.data);
    } else return  rejectWithValue(res.data.error?.message ?? "Something went wrong")

  } catch(e:any) { 
    console.log(e)
    return rejectWithValue(e?.message  ?? "General server error")
  }
});

export const registerThunk = createAsyncThunk("register" , async  ( registerForm: registerUserType ,{  dispatch , rejectWithValue, fulfillWithValue  }) => {
    try {
    const res = await axios.post(api.registerApi,  registerForm );
    dispatch(userActions.setRegisterForm(initialState.registerForm));

    if( res.status === 200 && res.data?.status === "SUCCESS") {
      return fulfillWithValue(res.data.data);
    } else return rejectWithValue(res.data.error?.message ?? "Something went wrong")
  } catch(e : any) { 
    return rejectWithValue(e?.message  ?? "General server error")
  }
});

export const getCurrentUserThunk = createAsyncThunk("login" , async  ( _args ,{ getState , rejectWithValue, fulfillWithValue, dispatch  }) => {
    try {
    const res = await axios.get(api.getUserApi );
    if( res.status === 200 ) {
        dispatch(userActions.setUser(res.data))
    } else rejectWithValue(res)
  } catch(e) { 
    rejectWithValue(e)
  }
});

export const updateUserByIdThunk = createAsyncThunk("login" , async  ( updateUser ,{ getState , rejectWithValue, fulfillWithValue, dispatch  }) => {
    try {
    const res = await axios.patch(api.updateUserApi , updateUser);
    if( res.status === 200 ) {
        dispatch(userActions.setUser(res.data))
    } else rejectWithValue(res)
  } catch(e) { 
    rejectWithValue(e)
  }
});

