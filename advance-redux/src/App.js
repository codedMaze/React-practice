import { Fragment } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./store/cart-actions";

let loading = false;

function App() {
  const dispatch = useDispatch();
  const toggleCart = useSelector((state) => state.ui.cartIsVisible);
  const items = useSelector((value) => value.cart);
  const notification = useSelector((value) => value.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (!loading) {
      loading = true;
      return;
    }
    if (!items.change) return;

    dispatch(sendCartData(items));
  }, [items, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {toggleCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
