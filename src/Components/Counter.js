import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
  decrementByValue,
} from "../Store/CounterSlice";

const Counter = () => {
  //const [counter, setCounter] = useState(0);
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const counter = useSelector((state) => {
    console.log(state.counter);
    return state.counter.count;
  });

  return (
    <div>
      <span>Counter Value: {counter}</span>
      <br />
      <button
        onClick={() =>
          //setCounter(counter + 1)
          //dispatch({ type: "INCREMENT" })
          dispatch(increment())
        }
      >
        INCREMENT
      </button>
      <button
        onClick={() =>
          //setCounter(counter - 1)
          //dispatch({ type: "DECREMENT" })
          dispatch(decrement())
        }
      >
        DECREMENT
      </button>
      <br />
      <input
        type="number"
        placeholder="Increase by value"
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() =>
          //setCounter(counter + Number(value))
          //dispatch({ type: "INCREMENT_BY_VALUE", payload: Number(value) })
          dispatch(incrementByValue(Number(value)))
        }
      >
        INCREMENT
      </button>
      <input
        type="number"
        placeholder="Decrease by value"
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() =>
          //setCounter(counter - Number(value))
          //dispatch({ type: "DECREMENT_BY_VALUE", payload: Number(value) })
          dispatch(decrementByValue(Number(value)))
        }
      >
        DECREMENT
      </button>
    </div>
  );
};

export default Counter;
