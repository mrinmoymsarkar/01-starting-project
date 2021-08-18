import {createSlice} from "@reduxjs/toolkit";

const initialAuthState = {
    isAuthenticated:false
}

export const authenticatedSlice = createSlice({
    name: 'authenticate',
    initialState: initialAuthState,
    reducers:{
        login(state){
            state.isAuthenticated = true
        },
        logout(state){
            state.isAuthenticated = false
        }
    }
})
export const authActions = authenticatedSlice.actions;
export default  authenticatedSlice.reducer;