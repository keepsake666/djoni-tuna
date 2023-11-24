"use client";
import styles from "./styles.module.css";
import { FC } from "react";
interface ProductProps {
  image: string;
  name: string;
  description: string;
  price: number;
  weight: number;
  onAddToCart: () => void;
}

const Product: FC<ProductProps> = ({
  image,
  name,
  description,
  price,
  onAddToCart,
  weight,
}) => {
  return (
    <div className={styles.product}>
      <img className={styles.img} src={image} alt={name} />
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.containerPrice}>
        <p className={styles.price}>
          {price.toFixed(2)}₽<span className={styles.weight}>/{weight}г</span>
        </p>
        <button onClick={onAddToCart} className={styles.button}>
          Выбрать
        </button>
      </div>
    </div>
  );
};

export default Product;
