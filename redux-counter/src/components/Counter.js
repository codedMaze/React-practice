import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/index";

const Counter = () => {
  const counter = useSelector((value) => value.counter.counter);
  const showCounter = useSelector((value) => value.counter.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const incrementByFiveHandler = () => {
    dispatch(counterActions.incrementByFive(5));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{showCounter ? counter : "Counter"}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementByFiveHandler}>Increment by five</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
