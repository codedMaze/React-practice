import React from "react";
import { Link } from "react-router-dom";

const DUMMY_DATA = [
  { id: "p1", title: "Product1" },
  { id: "p2", title: "Product2" },
  { id: "p3", title: "Product3" },
];
const ProductPage = () => {
  return (
    <div>
      <h2>Some of the product</h2>
      <ul>
        {DUMMY_DATA.map((value) => (
          <li key={value.id}>
            <Link to={`${value.id}`}>
              <h2>{value.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
