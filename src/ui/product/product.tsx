"use client";
import styles from "./styles.module.css";
import { FC } from "react";
import { Product } from "@/types/types";

const Product: FC<Product> = ({
  image,
  name,
  description,
  price,
  onAddToCart,
  weight,
}) => {
  return (
    <li className={styles.product}>
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
    </li>
  );
};

export default Product;
