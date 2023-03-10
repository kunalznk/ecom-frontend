import { configureStore, createSlice ,combineReducers,   createAsyncThunk, isPending, isRejected, isFulfilled, current } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';

import { userReducer } from './userSlice';
import { appReducer } from './appSlice';
import { productReducer } from './productSlice';
import { orderReducer } from './orderSlice';

const store = configureStore({
    reducer:{
        entities: combineReducers({
            user: userReducer,
            app: appReducer,
            product: productReducer,
            order: orderReducer
        })
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    // devTools:false
  })

  // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
