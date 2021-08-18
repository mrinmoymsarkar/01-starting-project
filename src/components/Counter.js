
import { useSelector, useDispatch, connect } from 'react-redux';
import classes from './Counter.module.css';
import {counterActions} from '../store/counter'

const Counter = () => {
  const counter = useSelector(state => state.counter.counter);

  const toggle = useSelector(state =>state.counter.toggle);

  const toggleCounterHandler = () => {
      dispatch(counterActions.toggle());
  };

  const dispatch = useDispatch();

  const incrementHandler = () =>{
    dispatch(counterActions.increment())
  }

  const increaseHandler = () =>{
    dispatch(counterActions.increase(10))
  }

  const decrementHandler = () =>{
    dispatch(counterActions.decrement())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
        {toggle && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick = {incrementHandler}>Increment</button>
        <button onClick = {increaseHandler}>Increment by 10</button>
        <button onClick = {decrementHandler}>Decrement</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
