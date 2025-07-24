import { useDispatch, useSelector } from "react-redux";
import { incerement, decrement } from "./features/Counters/CountersSlice";
import { Posts } from "./Components/Posts";

function App() {
  const counters = useSelector((state) => state.counters);
  const totalCount = counters.reduce((sum, current) => sum + current.value, 0);

  const dispatch = useDispatch();
  const handleIncrease = (id) => {
    dispatch(incerement(id));
  };
  const handleDecrease = (id) => {
    dispatch(decrement(id));
  };

  return (
    <div>
      <h1>{totalCount}</h1>

      <button onClick={() => handleIncrease(1)}>Increase</button>
      <button onClick={() => handleDecrease(2)}>Decrease</button>
      <Posts></Posts>
    </div>
  );
}

export default App;
