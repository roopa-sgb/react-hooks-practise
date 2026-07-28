import { createContext, useContext, useState } from "react";

const userContext = createContext();

function UseContext() {
  const [user, setUser] = useState("Roopa");
  return (
    <>
      <userContext.Provider value={user}>
        <h1>use context hook</h1>
        <Component2 />
      </userContext.Provider>
    </>
  );
}
function Component2() {
  const user = useContext(userContext);
  return (
    <>
      <h2>hello , {user}</h2>
      <Component3 />
    </>
  );
}
function Component3() {
  const user = useContext(userContext);
   console.log(user);
  return (
    <>
      <h1>hello , {user}</h1>
    </>
  );
}
export default UseContext;
