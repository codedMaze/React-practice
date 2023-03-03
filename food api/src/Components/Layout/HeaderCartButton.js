import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../Store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const headerCartCtx = useContext(CartContext);
  const btnClasses = `${classes.button} ${btnIsHighlighted && classes.bump}`;
  const numberOfCartItems = headerCartCtx.items.reduce((initial, item) => {
    return initial + item.amount;
  }, 0);
  useEffect(() => {
    if (headerCartCtx.items.length === 0) {
      return;
    }
    const timer = setBtnIsHighlighted(true);
    setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return clearTimeout(timer);
  }, [headerCartCtx.items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <spam className={classes.icon}>
        <CartIcon />
      </spam>
      <spam>Your Cart</spam>
      <spam className={classes.badge}>{numberOfCartItems}</spam>
    </button>
  );
};

export default HeaderCartButton;
