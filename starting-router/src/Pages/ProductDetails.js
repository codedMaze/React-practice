import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();

  return (
    <>
      <h2>This is each product details</h2>
      <p>{params.id}</p>
    </>
  );
};

export default ProductDetails;
