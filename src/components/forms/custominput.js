import { useState } from "react";

const Input = (validate) => {
  const [EnteredValue, SetEnteredvalue] = useState("");
  const [focus, setfocus] = useState(null);
  const ValueIsValid = validate(EnteredValue);
  const HasError = !ValueIsValid && focus;
  const valueInputChangeHandler = (e) => {
    const val = e.target.value;

    SetEnteredvalue(val.slice(0, 1).toUpperCase() + val.slice(1));
    setfocus(true);
  };
  const blurHandler = () => {
    setfocus(true);
  };
  const reset = () => {
    SetEnteredvalue("");
    setfocus(false);
  };
  return {
    EnteredValue,
    focus,
    setfocus,
    SetEnteredvalue,
    ValueIsValid,
    HasError,
    valueInputChangeHandler,
    blurHandler,
    reset,
  };
};
export default Input;
