import React, { useContext, useState } from "react";
import CartContext from "../../Store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [showCartForm, setShowCartForm] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderFormHandler = () => {
    setShowCartForm(true);
  };

  const hideOrderFormHandler = () => {
    setShowCartForm(false);
  };

  const submitOrderHandler = (userData) => {
    fetch("https://react-demo-b0db3-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items,
      }),
    });
  };

  const modalAction = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onHide}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderFormHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHide={props.onHide}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {showCartForm && (
        <Checkout
          onCancle={hideOrderFormHandler}
          onOrder={submitOrderHandler}
        />
      )}
      {!showCartForm && modalAction}
    </Modal>
  );
};

export default Cart;
