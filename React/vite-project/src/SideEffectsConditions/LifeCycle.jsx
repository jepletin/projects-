import { useEffect, useState } from "react";

function LifeCycle() {
  const [n, setN] = useState(0);
  useEffect(()=>{
    console.log("N has changed");
  },[n]);//when component lives <when state changes>

  //The component is alive and responding to changes.

  return (
    <div>
      <div>
        <button onClick={() => setN(n - 1)}>-</button>
        <b>{n}</b>
        <button onClick={() => setN(n + 1)}>+</button>
      </div>

      <EvenOrOdd n={n} />
    </div>
  );
}

function EvenOrOdd(props) {
  const { n } = props;

  if (n % 2 === 0) {
    return <EvenComponet />;
  }

  return <OddComponet />;
}

function EvenComponet() {
    useEffect(()=>{
        console.log("Even component rendered");

    },[]);// This happens once, because the component has just been mounted.
  return (
    <div>
      <h1>Even</h1>
    </div>
  );
}

function OddComponet() {
    useEffect(()=>{//How does useEffect know the component is dying?It uses a cleanup function.
        return()=>{
            console.log("odd components dies")//When  the  component  disappears:
        };// called when component dies
    },[]);
  return (
    <div>
      <h1>Odd</h1>
    </div>
  );
}

export default LifeCycle;