import styles from "./styles.module.css";
import Product from "@/ui/product/product";

interface Products extends Omit<Product, "onAddToCart"> {}
interface ProductListProps {
  name: string;
  products: Products[];
}
const ProductList = ({ name, products }: ProductListProps) => {
  function addButton() {
    console.log("Hello");
  }
  return (
    <div className={styles.productList}>
      <h2 className={styles.title}> {name}</h2>
      <ul className={styles.list}>
        {products.map((item, index) => (
          <Product
            key={index}
            image={item.image}
            name={item.name}
            description={item.image}
            price={item.price}
            weight={item.weight}
            onAddToCart={addButton}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
