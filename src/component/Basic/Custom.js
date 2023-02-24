import { useState, useEffect } from "react";

function Custom(initialvalue) {
  const [value, setValue] = useState(initialvalue);

  useEffect(() => {

    console.log("printing from custom hook");

    if (value >= 1) {
      document.title = `count (${value})`;
    } else {
      document.title = `Joy Adhikary`;
    }

  });
  
  return [value, setValue];
}

export default Custom;
