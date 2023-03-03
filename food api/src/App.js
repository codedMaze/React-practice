import { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      <Header onShow={showCartHandler} />
      <main>
        <Meals />
      </main>
      {cartIsShown && <Cart onHide={hideCartHandler} />}
    </CartProvider>
  );
}

export default App;
