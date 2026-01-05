import { useState, useEffect } from "react";

function Effect() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("Mounting + Update");
  //   setTimeout(() => {
  //     alert("data fetched");
  //   }, 1000);
  // }, [count]);

  // console.log("Render");

  const fetchData = () => {
    console.log("Clean-up");
  };

  useEffect(() => {
    console.log("Mounting");
    const timerId = setInterval(fetchData, 1000);
    return () => {
      clearInterval(timerId);
      console.log("Unmounting");
    };
  }, []);

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

export default Effect;
