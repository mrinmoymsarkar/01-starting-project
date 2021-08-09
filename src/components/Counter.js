import {Component} from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => {
    // console.log('counter')
    return state.counter});

  const toggle = useSelector(state =>state.toggle);

  const toggleCounterHandler = () => {
      dispatch({type:'toggle'})
  };

  const dispatch = useDispatch();

  const incrementHandler = () =>{
    dispatch({type:'increment'})
  }

  const increaseHandler = () =>{
    dispatch({type:'increase', amount:5})
  }

  const decrementHandler = () =>{
    dispatch({type:'decrement'})
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


// class Counter extends Component {
//
//   incrementHandler =()=>{
//     this.props.increment();
//   }
//
//   decrementHandler =()=>{
//     this.props.decrement();
//   }
//
//   toggleCounterHandler () {
//
//   }
//
//   render () {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick = {this.incrementHandler}>Increment</button>
//           <button onClick = {this.decrementHandler}>Decrement</button>
//         </div>
//
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
//
// }
// const mapStateToProps = state => {
//   return {
//     counter:state.counter
//   }
// }
//
// const mapDispatchToProps = dispatch =>{
//   return {
//     increment: () => dispatch ({type:'increment'}),
//     decrement: () => dispatch ({type:'decrement'}),
//   }
// }
// export default connect (mapStateToProps, mapDispatchToProps ) (Counter);