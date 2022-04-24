import React, { useState, useEffect } from "react";

const CounterFunction = () => {
  const [count, setCount] = useState(0);
  const [nombre, setNombre] = useState("Erika");

  const sumOne = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    return () => {
      console.log("Termine");
    };
  }, []);

  return (
    <div>
      <h1>{nombre}</h1>
      <p>{count}</p>
      <button onClick={() => sumOne()}>sumar 1 </button>
    </div>
  );
};

export default CounterFunction;
