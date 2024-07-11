import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 15;

  // setCounter()
  function addValue() {
    console.log(counter);
    if (counter < 20){
      counter = counter + 1;
      setCounter(counter);
    }
  }
  function removeValue() {
    console.log(counter);
    if (counter > 0){
      counter = counter-1;
      setCounter(counter)
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>ADD {counter}</button>
      <br />
      <button onClick={removeValue}>Remove {counter}</button>
    </>
  );
}

export default App;
