import {createStore} from 'redux';

const initialState = {counter:0, toggle:true}
const countReducer = (state = initialState, action) => {
    if(action.type === 'increment'){
        return {
            counter : state.counter + 1 ,
            toggle:state.toggle
    };
}
    if(action.type === 'increase'){
        return {
            counter: state.counter + action.amount,
            toggle:state.toggle
        }
    }
    if(action.type === 'decrement'){
        return {
            counter : state.counter - 1,
            toggle:state.toggle
    };
}
    if(action.type === 'toggle'){
        return{
            counter: state.counter,
            toggle:!state.toggle
        }
    }
return state;
}

const store = createStore(countReducer);


export default store;

// console.log(store.getState());

// const counterSubscriber = () => {
//     const latestState = store.getState();
//     console.log(latestState)
// };

// store.subscribe(counterSubscriber);

// store.dispatch({type: 'increment'});
// store.dispatch({type: 'decrement'});