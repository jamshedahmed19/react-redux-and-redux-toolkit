import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counterValue = useSelector((state) => {
    return state.counter.count;
  });
  return (
    <div>
      <h1>Counter Value: {counterValue}</h1>
    </div>
  );
};

export default DisplayCounter;
