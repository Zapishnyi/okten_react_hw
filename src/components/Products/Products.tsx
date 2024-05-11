import React, { FC, useEffect, useState } from "react";
import { flushSync } from "react-dom";

import IProductProps from "../../models/IProductProps";
import Product from "../Product/Product";

import styles from "./Products.module.css";
import { getProducts } from "../../services/products.api.service";
import ButtonLeft from "../ButtonLeft/ButtonLeft";
import ButtonRight from "../ButtonRight/ButtonRight";
import PageMarkers from "../PageMarkers/PageMarkers";
import Menu from "../Menu/Menu";

const Products: FC = () => {
  const [products, setProducts] = useState<IProductProps[]>([]);
  const [skip, setSkip] = useState<number>(0);

  useEffect(() => {
    getProducts(skip).then(({ data: { products } }) => {
      document.startViewTransition(() => {
        flushSync(() => {});
      });
      setProducts(products);
    });
    return document
      .getElementsByClassName(styles[`mark_${skip}`])[0]
      .classList.add(styles.checked);
  }, [skip]);
  return (
    <div className={styles.wrapper}>
      <Menu />
      <div className={styles.productsWrapper}>
        {products.map((product, index: number) => (
          <Product key={index} cardId={index} product={product} />
        ))}
      </div>
      <ButtonLeft setSkip={setSkip} />
      <ButtonRight setSkip={setSkip} />
      <PageMarkers />
    </div>
  );
};

export default Products;
