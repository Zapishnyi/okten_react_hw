import React, { FC, useEffect, useState } from "react";
import { flushSync } from "react-dom";

import IProductProps from "../../models/IProductProps";
import Product from "../Product/Product";

import styles from "./Products.module.css";
import { getProducts } from "../../services/products.api.service";
import ButtonLeft from "../ButtonLeft/ButtonLeft";
import ButtonRight from "../ButtonRight/ButtonRight";

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
  let psn: number[] = [];
  let trigger: number[] = [];
  return (
    <div className={styles.wrapper}>
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
      <ButtonLeft setSkip={setSkip} />
      <ButtonRight setSkip={setSkip} />
      <div className={[styles.paginationMarker, styles.mark_0].join(" ")}></div>
      <div
        className={[styles.paginationMarker, styles.mark_20].join(" ")}
      ></div>
      <div
        className={[styles.paginationMarker, styles.mark_40].join(" ")}
      ></div>
      <div
        className={[styles.paginationMarker, styles.mark_60].join(" ")}
      ></div>
      <div
        className={[styles.paginationMarker, styles.mark_80].join(" ")}
      ></div>
    </div>
  );
};

export default Products;
