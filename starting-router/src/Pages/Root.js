import { Outlet } from "react-router-dom";
import MainHeader from "../Components/MainNavigation";

const RootLayout = () => {
  return (
    <>
      <MainHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
