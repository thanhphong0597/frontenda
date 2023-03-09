import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../configs/contextData";
import Category from "./Category";

const Categories = () => {
    const { products } = useData();
    const { category } = useParams();

    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const filtered = products.filter((item) => item.category === category);
        setFilteredProducts(filtered);
    }, [category, products]);

    return (
        <div className="py-16">
            <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product) => (
                    <Category key={product.id} category={product} />
                ))}
            </div>
        </div>
    );
};

export default Categories;
