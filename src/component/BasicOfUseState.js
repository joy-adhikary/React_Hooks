import "../assets/Style/App.css";
import { useState } from "react";

//!  we can only use hook with function component

//? hooks gula same order a run hoi

//! useState  kono function , loop , condition er majhe define kora jai nah . only and only main function  er top a likhty hoi

// * useState always return  an arrray with 2 values  ==> [1st  one  is value = Current value , 2nd one is setValue = update the current value ]

function BasicUseState() {
  const [count, setCount] = useState(10);

  const increment = () => {
    // ! we  cant use setcount this way because , if we use setCount 2 times  it will not update the count twice .. because its just overlapping each other

    // setCount(count + 1);
    // setCount(count + 1);

    //? use setCount this way because , if we use setCount 2 times it will work . beacuse it is taking the previous value of count

    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevcount) => prevcount - 1);
    setCount((prev) => prev - 1);

    // it can be written like this way too

    setCount((prev) => {
      return prev - 1;
    });
  };

  return (
    <div className="Parent">
      <div className="text-content">UseState Basic</div>
      <button className="negative" onClick={decrement}>
        -
      </button>
      <span className="center-content">{count}</span>
      <button className="positive" onClick={increment}>
        +
      </button>
    </div>
  );
}

export default BasicUseState;
