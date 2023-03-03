import { useSelector } from "react-redux/es/exports";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItem = useSelector((value) => value.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItem.map((value) => (
          <CartItem
            key={value.id}
            item={{
              id: value.id,
              title: value.name,
              quantity: value.quantity,
              total: value.totalPrice,
              price: value.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
