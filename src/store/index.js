import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = {counter:0, toggle:true}

const counterSlice = createSlice({
    name:'counter',
    initialState: initialCounterState,
    reducers :{
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter++
        },
        increase(state, action){
            state.counter =  state.counter + action.payload;
        },
        toggle(state){
            state.toggle = !state.toggle
        }
    }
})

const initialAuthState = {
    isAuthenticated:false
}

const authenticatedSlice = createSlice({
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

const store = configureStore({
    reducer: {counter: counterSlice.reducer, auth: authenticatedSlice.reducer}
});

export const counterActions = counterSlice.actions;
export const authActions = authenticatedSlice.actions;


export default store;
