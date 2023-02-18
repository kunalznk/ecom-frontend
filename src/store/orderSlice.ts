import { createAsyncThunk, createSlice, PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit";
import axios from "axios";

import api from "../api"
import { productType } from "../utils/schema/product";
import { addressType } from "../utils/schema/user"
 

type order = { _id: string,
    userId: string,
    products: productType[],
    status: string,
    invoice: string,
    adderss: addressType[] }
 
type cart =  {
    _id: string,
    userId: string,
    products: productType[],
    price: number,
    status: string,
   }    

type orderSliceType = {
   orders?: order[], 
   cart ?:cart,
   order?: order 
}

const initialState : orderSliceType = {
    orders: [],
    cart: undefined,
    order: undefined
}

const reducers : SliceCaseReducers<orderSliceType> =  {
    setOrders : (state , action: PayloadAction<order[]>) => {
        state.orders = action.payload
    },
    setOrder : (state , action: PayloadAction<order>) => {
        state.order = action.payload
    },
    setCart : (state , action: PayloadAction<cart>) => {
        state.cart = action.payload
    },
   
}

const orderSlice = createSlice<orderSliceType , SliceCaseReducers<orderSliceType>>({
    name: 'order',
    initialState,
    reducers,
});

export const orderActions =  orderSlice.actions;
export const orderReducer = orderSlice.reducer;

export const fetchOrders = createAsyncThunk("fetchOrders" , async  ( _args ,{ getState , rejectWithValue, fulfillWithValue, dispatch,   }) => {
    try {
    const res = await axios.get(api.getOrdersApi);
    if( res.status === 200 &&  res.data?.status === "SUCCESS") {
        dispatch(orderActions.setOrders(res.data.data))
        return fulfillWithValue(res.data.data);
    } else return  rejectWithValue(res.data.error?.message ?? "Something went wrong")
    
  } catch(e:any) { 
    console.log(e)
    return rejectWithValue(e?.message  ?? "General server error")
  }
});

export const fetchCart = createAsyncThunk("fetchCart" , async  ( _args ,{ getState , rejectWithValue, fulfillWithValue, dispatch,   }) => {
    try {
    const res = await axios.get(api.getCartApi);
    if( res.status === 200 &&  res.data?.status === "SUCCESS") {
        dispatch(orderActions.setCart(res.data.data))
        return fulfillWithValue(res.data.data);
    } else return  rejectWithValue(res.data.error?.message ?? "Something went wrong")
    
  } catch(e:any) { 
    console.log(e)
    return rejectWithValue(e?.message  ?? "General server error")
  }
});

export const setOrder = createAsyncThunk("setOrder" , async  ( _args ,{ getState , rejectWithValue, fulfillWithValue, dispatch,   }) => {
    try {
    const res = await axios.get(api.getOrdersApi);
    if( res.status === 200 &&  res.data?.status === "SUCCESS") {
        dispatch(orderActions.setOrder(res.data.data))
        return fulfillWithValue(res.data.data);
    } else return  rejectWithValue(res.data.error?.message ?? "Something went wrong")
    
  } catch(e:any) { 
    console.log(e)
    return rejectWithValue(e?.message  ?? "General server error")
  }
});

export const addToCart = createAsyncThunk("addToCart" , async  ( item: { productId: string, qty: number } ,{ getState , rejectWithValue, fulfillWithValue, dispatch,   }) => {
    try {
    const res = await axios.post(api.addToCartApi, item );
    console.log(res);
    if( res.status === 200 &&  res.data?.status === "SUCCESS") {
        dispatch(orderActions.setCart(res.data.data))
        return fulfillWithValue(res.data.data);
    } else return  rejectWithValue(res.data.error?.message ?? "Something went wrong")
    
  } catch(e:any) { 
    console.log(e)
    return rejectWithValue(e?.message  ?? "General server error")
  }
});

export const deleteFromCart = createAsyncThunk("deleteFromCart" , async  ( cart: { cartId: string , productId?: string, quantity?: number } ,{ getState , rejectWithValue, fulfillWithValue, dispatch,   }) => {
    try {
    const res = await axios.patch(api.deleteFromCartApi, cart);
    console.log(res);
    if( res.status === 200 &&  res.data?.status === "SUCCESS") {
        dispatch(orderActions.setCart(res.data.data))
        return fulfillWithValue(res.data.data);
    } else return  rejectWithValue(res.data.error?.message ?? "Something went wrong")
    
  } catch(e:any) { 
    console.log(e)
    return rejectWithValue(e?.message  ?? "General server error")
  }
});

export const placeOrder = createAsyncThunk("placeOrder" , async  ( order: { address: addressType , productId?: string, cartId?: string } ,{ getState , rejectWithValue, fulfillWithValue, dispatch,   }) => {
    try {
    const res = await axios.post(api.deleteFromCartApi, order);
    if( res.status === 200 &&  res.data?.status === "SUCCESS") {
        dispatch(orderActions.setCart(res.data.data))
        return fulfillWithValue(res.data.data);
    } else return  rejectWithValue(res.data.error?.message ?? "Something went wrong")
    
  } catch(e:any) { 
    console.log(e)
    return rejectWithValue(e?.message  ?? "General server error")
  }
});


// export const loginThunk = createAsyncThunk("login" , async  ( loginForm: loginUserType ,{ getState , rejectWithValue, fulfillWithValue, dispatch,   }) => {
//     try {
//     const res = await axios.post(api.loginApi,  loginForm );
//     dispatch(orderActions.setLoginForm(initialState.loginForm));

//     if( res.status === 200 &&  res.data?.status === "SUCCESS") {
//       localStorage.setItem("token", res.data.data.token);
//       console.log(res.data.data.token);
//         return fulfillWithValue(res.data.data);
//     } else return  rejectWithValue(res.data.error?.message ?? "Something went wrong")

//   } catch(e:any) { 
//     console.log(e)
//     return rejectWithValue(e?.message  ?? "General server error")
//   }
// });

// export const registerThunk = createAsyncThunk("register" , async  ( registerForm: registerUserType ,{  dispatch , rejectWithValue, fulfillWithValue  }) => {
//     try {
//     const res = await axios.post(api.registerApi,  registerForm );
//     dispatch(orderActions.setRegisterForm(initialState.registerForm));

//     if( res.status === 200 && res.data?.status === "SUCCESS") {
//       return fulfillWithValue(res.data.data);
//     } else return rejectWithValue(res.data.error?.message ?? "Something went wrong")
//   } catch(e : any) { 
//     return rejectWithValue(e?.message  ?? "General server error")
//   }
// });

// export const getCurrentUserThunk = createAsyncThunk("getCurrentUser" , async  ( _args ,{ getState , rejectWithValue, fulfillWithValue, dispatch  }) => {
//     try {
//     const res = await axios.get(api.getUserApi );
//     if( res.status === 200 && res.data?.status === "SUCCESS" ) {
//         dispatch(orderActions.setUser(res.data?.data))
//       } else return rejectWithValue(res.data.error?.message ?? "Something went wrong")
//     } catch(e:any ) { 
//       return rejectWithValue(e?.message  ?? "General server error")
//     }
// });

// export const updateUserByIdThunk = createAsyncThunk("updateUser" , async  ( updateUser: userType ,{ getState , rejectWithValue, fulfillWithValue, dispatch  }) => {
//     try {
//     const res = await axios.patch(api.updateUserApi , updateUser);
//     if( res.status === 200 ) {
//         dispatch(orderActions.setUser(res.data))
//     } else return rejectWithValue(res.data.error?.message ?? "Something went wrong")
//   } catch(e:any ) { 
//     return rejectWithValue(e?.message  ?? "General server error")
//   }
// });

