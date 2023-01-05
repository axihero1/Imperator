 import { createSlice } from "@reduxjs/toolkit";

 const currentProductSlice = createSlice({
    name:"currentProduct",
    initialState:{},
    reducers: {
        setCurrentPoduct: (state , action) => {
            return action.payload
        },
    },
 });
 export const {setCurrentPoduct} = currentProductSlice.actions;
 export default currentProductSlice.reducer