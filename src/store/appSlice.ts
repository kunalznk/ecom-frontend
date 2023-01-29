import { AlertColor } from "@mui/material";
import { createSlice, isFulfilled, isPending, isRejectedWithValue, PayloadAction } from "@reduxjs/toolkit";
import { SUCCESS_MESSAGES } from "../utils/constants";
type error = {
        path: string,
        message: string,
        severity: AlertColor
}
type appSliceType = {
    loading: boolean,
    error: error
}

const initialState: appSliceType = {
    loading: false,
    error: {
        path:"",
        message:"",
        severity: "info"
    }
}
const appSlice = createSlice({
    name: 'app',
    initialState:initialState,
    reducers: {
       setLoading: (state , action: PayloadAction<boolean>) => {
        state.loading = action.payload;
       },
       setError: (state , action:PayloadAction<error>) => {
        state.error = action.payload;
       },
       resetError: (state) => {
        state.error = initialState.error;
       }
    },
    extraReducers(builder) {
        builder.addMatcher(isPending, (state, action) => {
            state.loading = true;
         });
         builder.addMatcher(isRejectedWithValue, (state, action) => {
            state.loading = false;
            state.error = {
                path: "",
                severity: "error",
                message: action.payload!as unknown as string
             }
         });
        //  builder.addMatcher(isRejected, (state, action) => {
        //     console.log(state, action)
        //    state.loading = false;
        // });
        builder.addMatcher(isFulfilled, (state, action) => {
         state.loading = false;
         state.error = {
            path: "",
            severity: "info",
            message: SUCCESS_MESSAGES[action.type]
         }
      });
    },
});

export const appActions =  appSlice.actions;
export const appReducer = appSlice.reducer;