// import { Component } from "react";
import { useSelector, useDispatch} from "react-redux";
import classes from "./Counter.module.css";
import { INCREMENT } from "../store";
import { counterActions } from "../store/counter-slice";
import { createAction } from "@reduxjs/toolkit";

const Counter = () => {
  // useSelector is used for fetching data out of store
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  // const incrementHandler = () => {
  //   dispatch({ type: INCREMENT });
  // };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  // const increaseHandler = () => {
  //   dispatch({ type: "increase", amount: 5 });
  // };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); // { type: SOME_UNIQUE_INDENTIFIER, payload: 5}
  };

  // const decrementHandler = () => {
  //   dispatch({ type: "decrement" });
  // };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  // const toggleCounterHandler = () => {
  //   dispatch({ type: "toggle" });
  // };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={incrementHandler}>Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;


// using redux via class based components
// class Counter extends Component {
//   incrementHandler(){
//     this.props.increment();    
//   }
  
//   decrementHandler(){
//     this.props.decrement();
//   }

//   toggleCounterHandler = () => {};
  
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({type: 'increment'}),
//     decrement: () => dispatch({type: 'decrement'}),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
