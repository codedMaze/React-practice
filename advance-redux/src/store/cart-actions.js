import { cartAction, uiAction } from "./index";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-demo-b0db3-default-rtdb.firebaseio.com/items.json"
      );

      if (!response.ok) {
        throw new Error("Unable to load data");
      }

      const data = await response.json();

      return data;
    };
    try {
      const dataFetch = await fetchData();
      dispatch(
        cartAction.replaceCart({
          items: dataFetch.items || [],
          totalQuantity: dataFetch.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiAction.setNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};

export const sendCartData = (items) => {
  return async (dispatch) => {
    dispatch(
      uiAction.setNotification({
        status: "pending",
        title: "sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-demo-b0db3-default-rtdb.firebaseio.com/items.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: items.items,
            totalQuantity: items.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiAction.setNotification({
          status: "success",
          title: "Success...",
          message: "Sent cart data!",
        })
      );
    } catch (error) {
      dispatch(
        uiAction.setNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
