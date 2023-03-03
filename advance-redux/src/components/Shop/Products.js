import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCT = [
  {
    id: "p1",
    price: 11,
    title: "My First Book",
    description: "I never write a book",
  },
  {
    id: "p2",
    price: 8,
    title: "My Second Book",
    description: "A book I wrote",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
