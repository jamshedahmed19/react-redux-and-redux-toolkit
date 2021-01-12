import Counter from "./Components/Counter";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import DisplayCounter from "./Components/DisplayCounter";
function App() {
  return (
    <div>
      <Provider store={store}>
        <Counter />
        <DisplayCounter />
      </Provider>
    </div>
  );
}

export default App;
