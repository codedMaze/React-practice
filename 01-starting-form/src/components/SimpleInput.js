import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: inputName,
    hasError: inputNameHasError,
    isValid: inputNameIsValid,
    valueChangeHandler: inputNameHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: inputEmail,
    hasError: emailInputIsValid,
    isValid: inputEmailIsValid,
    valueChangeHandler: inputEmailHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (inputNameIsValid && inputEmailIsValid) formIsValid = true;

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!inputNameIsValid && !inputEmailIsValid) {
      return;
    }

    resetName();
    resetEmail();
  };

  const nameInputClass = inputNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClass = emailInputIsValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitFormHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={inputName}
          onBlur={nameInputBlurHandler}
          onChange={inputNameHandler}
        />
      </div>
      {inputNameHasError && (
        <p className="error-text">Pls Enter A Valid Name</p>
      )}
      <div className={emailInputClass}>
        <label htmlFor="name">Your Email</label>
        <input
          type="text"
          id="email"
          value={inputEmail}
          onBlur={emailInputBlurHandler}
          onChange={inputEmailHandler}
        />
      </div>
      {emailInputIsValid && (
        <p className="error-text">Pls Enter A Valid Email</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
