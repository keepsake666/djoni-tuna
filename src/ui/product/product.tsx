"use client";
import React from "react";

interface ProductProps {
  image: string;
  name: string;
  description: string;
  price: number;
  onAddToCart: () => void;
}

const Product: React.FC<ProductProps> = ({
  image,
  name,
  description,
  price,
  onAddToCart,
}) => {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p className="price">${price.toFixed(2)}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
