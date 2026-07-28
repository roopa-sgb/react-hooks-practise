import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");
  const[count, setCount] = useState(0);
  const [car, setCar] = useState({
    brand: "ford",
    year: "1987",
    make: "hyundai",
    model: "i10",
  });
  console.log("component is rendered");
  let number = 0;
  console.log(++number);
  console.log(count);

  return (
    <>
      <h1>My favourite color is {color} !</h1>
      <button type="button" onClick={() => setColor("blue")}>
        Blue
      </button>
      <button onClick={() => setColor("green")}>Green</button>
      <h2>
        My favourite car is {car.brand} of year {car.year} , make and model
        being {car.make} {car.model}
      </h2>
      <button
        type="button"
        onClick={() => {
          let increase = count;
          increase++;
          setCount(increase);
          
        }}
      >
        Count
      </button>
    </>
  );
}

export default App;
