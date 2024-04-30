import React, {FC, useEffect, useState} from 'react';

import IProductProps  from "./IProduct";
import ProductImageSlider from "./productImage/ProductImageSlider";

import styles from './Product.module.css'

const Products:FC = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(products => setProducts(products.products))
    },[])

    return (
        <div className={styles.productsWrapper}>
            {
            products.map((product:IProductProps,index) =>
                <div key={index} className={styles.productCard}>
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
                        id={product.id}
                    />
                </div>)
        }
        </div>
    )
};

export default Products;