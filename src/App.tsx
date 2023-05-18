import React, {useState} from "react";
import "./App.css";
import Counter from "./components/Counter";


function App() {
  const [counters, setCounters] = useState([
    {
      id: Math.random().toString(),
      value: 1,
      buttons: [1, 2, 3]
    },
    {
      id: Math.random().toString(),
      value: 2,
      buttons: [1, 2, 3]
    },
    {
      id: Math.random().toString(),
      value: 3,
      buttons: [1, 2, 3]
    }
  ]);
  const plus = (id: string, buttonValue: number) => {
    const newCounters = counters.map(counter => counter.id === id
        ? {...counter,
          value: counter.value + buttonValue
        }
        : counter)
    setCounters(newCounters)
  }
  const minus = (id: string, buttonValueMinus: number) => {
    const newCounters = counters.map(counter => counter.id === id
        ? {...counter,
          value: counter.value - buttonValueMinus
        }
        : counter)
    setCounters(newCounters)
  }
  const reset = (id: string) => {
    const newCounters = counters.filter(counter => counter.id !== id)
    setCounters(newCounters)
  }
  return (
      <div className="App">

        {counters.map(counter =>
            <Counter key={counter.id} counter={counter}
                     plus={plus}
                     minus={minus}
                     reset={reset}
            />
        )}
      </div>
  );
}

export default App;
