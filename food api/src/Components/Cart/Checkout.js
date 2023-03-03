import React, { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveNumber = (value) => value.length === 5;

const Checkout = (props) => {
  const [formInputIsValid, setFormInputIsValid] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const formHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalIsValid = isFiveNumber(enteredPostal);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputIsValid({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postal: enteredPostalIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

    props.onOrder({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostal,
      city: enteredCity,
    });
  };
  return (
    <form className={classes.form} onSubmit={formHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputIsValid.name && <p>Please enter a valid name</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputIsValid.street && <p>Please enter a valid street</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputIsValid.postal && <p>Please enter a valid postal</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputIsValid.city && <p>Please enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancle}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
