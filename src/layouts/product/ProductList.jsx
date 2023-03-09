import React from "react";
import { useData } from "../../configs/contextData";
import ProductItem from "./ProductItem";

const ProductList = ({ slideStart, slideEnd }) => {
    const { products } = useData();
    if (!products) return;
    return (
        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {slideEnd
                ? products
                      .slice(slideStart, slideEnd)
                      .map((product) => (
                          <ProductItem key={product.id} product={product} />
                      ))
                : products.map((product) => (
                      <ProductItem key={product.id} product={product} />
                  ))}
        </div>
    );
};

export default ProductList;
