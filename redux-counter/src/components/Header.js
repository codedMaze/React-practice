import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../store";
import classes from "./Header.module.css";

const Header = () => {
  const state = useSelector((value) => value.auth.isAuthenticated);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authAction.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>

      {state && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
