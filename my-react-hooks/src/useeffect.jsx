import { useEffect, useState } from "react";

function Useeffect() {
  const [color, setColor] = useState("red");
  const [count, setCount] = useState(0);
  let increase = count;
  useEffect(() => {
    console.log("code executed after component rendered");
  }, [color, count, increase]);
  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((previousCount) => previousCount + 1);
    }, 1000);
    return () => clearTimeout(timer);
  },[] );

  return (
    <>
      <h1>useeffect hook excercise</h1>
      <h2>My favourite color is {color}</h2>
      <button type="button" onClick={() => setColor("blue")}>
        Blue
      </button>
      <button
        type="button"
        onClick={() => {
          increase++;
          setCount(increase);
        }}
      >
        count
      </button>
    </>
  );
}

export default Useeffect;
