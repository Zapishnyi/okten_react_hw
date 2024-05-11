import React, { FC } from "react";

import IProductProps from "../../models/IProductProps";
import ProductImageSlider from "../ProductImageSlider/ProductImageSlider";

import styles from "./Product.module.css";

interface IProductsProps {
  cardId: number;
  product: IProductProps;
}

const Product: FC<IProductsProps> = ({ cardId, product }) => {
  return (
    <div key={cardId} className={styles.productCard}>
      <p> {product.title}</p>
      <p>{product.description}</p>
      <p>{product.discountPercentage}% off</p>
      <p>Price - {product.price}$</p>
      <p>Rating: {product.rating}</p>
      <p>Remain in stock: {product.stock} pcs</p>
      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>
      <ProductImageSlider
        imgList={product.images}
        title={product.title}
        id={cardId}
      />
    </div>
  );
};

export default Product;
