import React from "react";
import MainHeader from "../Components/MainNavigation";

const ErrorPage = () => {
  return (
    <>
      <MainHeader />
      <main>
        <h1>An error occurred!</h1>
        <p>Could not find page!</p>
      </main>
    </>
  );
};

export default ErrorPage;
