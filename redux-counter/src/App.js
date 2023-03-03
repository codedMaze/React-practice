import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";

function App() {
  const state = useSelector((value) => value.auth.isAuthenticated);
  return (
    <Fragment>
      {<Header />}
      {!state && <Auth />}
      {state && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
