import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h2>Welcom to the Home page</h2>
      <p>
        Go to <Link to="/product">the list of product</Link>.
      </p>
    </div>
  );
};

export default HomePage;
