import { useState } from "react";

function useToggle(initialValue) {
    
  const [value, setValue] = useState(initialValue);

  // function ToggleValue(value){

  //     const TypeOfValue = typeof (value);

  //      value=TypeOfValue==='boolean'?value:!initialValue;

  //      setValue((prev)=>value);

  // }

  function ToggleValue(value) {

    setValue((currentValue) =>
        // ! value er type jodi boolean nah hoi that means ture or false nah hoi  tahole just opposite ta set kore dibo ..
        // ? else same value tai rekhe dibo . 
      typeof value === "boolean" ? value : !currentValue
    );
  }

  return [value, ToggleValue];
}
export default useToggle;
