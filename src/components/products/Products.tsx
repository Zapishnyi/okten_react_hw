import React, { FC, useEffect, useState } from "react";

import IProductProps from "./Product/IProductProps";
import Product from "./Product/Product";

import styles from "./Products.module.css";
import axios from "axios";

const Products: FC = () => {
  const [products, setProducts] = useState<IProductProps[]>([]);
  useEffect(() => {}, []);

  let psn: number[] = [];
  let trigger: number[] = [];
  return (
    <div className={styles.productsWrapper}>
      {products.map((product, index: number) => (
        <Product
          key={index}
          cardId={index}
          product={product}
          psn={psn}
          trigger={trigger}
        />
      ))}
    </div>
  );
};

export default Products;
