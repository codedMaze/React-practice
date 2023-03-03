import { useState } from "react";

const useInput = (validHandler) => {
  const [inputValue, setInputValue] = useState("");
  const [inputValueIsTouched, setInputValueIsTouched] = useState(false);

  const isValid = validHandler(inputValue);
  const hasError = inputValueIsTouched && !isValid;

  const inputHandler = (event) => {
    setInputValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setInputValueIsTouched(true);
  };

  const reset = () => {
    setInputValue("");
    setInputValueIsTouched(false);
  };

  return {
    value: inputValue,
    isValid,
    hasError,
    valueChangeHandler: inputHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
