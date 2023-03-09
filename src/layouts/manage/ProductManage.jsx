import React, { useState } from "react";
import { Link } from "react-router-dom";
import ActionDelete from "../../components/action/ActionDelete";
import ActionEdit from "../../components/action/ActionEdit";
import EditNameForm from "../../components/action/EditNameForm";
import Table from "../../components/table/Table";
import { useData } from "../../configs/contextData";
import DashboardHeading from "../dashboard/DashboardHeading";

const ProductManage = () => {
    const { products } = useData();
    const [showForm, setShowForm] = useState(false);
    const [initialValue, setInitialValue] = useState({});

    const handleShowForm = () => {
        setShowForm(true);
    };
    const handleClick = (product) => {
        setInitialValue(product);
        setShowForm(true);
    };
    const handleSubmit = (product) => {
        console.log(product);
        setShowForm(false);
    };
    const handleCancel = () => {
        setShowForm(false);
    };
    const handleDelete = (id) => {
        fetch(`https://localhost:7091/api/products/${id}`, {
            method: "DELETE",
        })
            .then((res) => {
                if (res.ok) {
                    console.log(`Product with id ${id} has been deleted.`);
                    // Do any additional tasks here
                } else {
                    console.error(`Failed to delete product with id ${id}.`);
                    // Handle the error as needed
                }
            })
            .catch((error) => {
                console.error(`Failed to delete product with id ${id}.`, error);
                // Handle the error as needed
            });
    };

    if (!products) return null;

    return (
        <div>
            <DashboardHeading
                title="Prodution"
                desc="Overview prodution monitor"
            />
            <Table>
                <thead className="bg-[#f7f7f8]">
                    <tr className="capitalize">
                        <th className="py-5 font-bold text-left align-middle whitespace-nowrap px-7">
                            id
                        </th>
                        <th className="py-5 font-bold text-left align-middle whitespace-nowrap px-7">
                            name
                        </th>
                        <th className="py-5 font-bold text-left align-middle whitespace-nowrap px-7">
                            price
                        </th>
                        <th className="py-5 font-bold text-left align-middle whitespace-nowrap px-7">
                            category
                        </th>
                        <th className="py-5 font-bold text-left align-middle whitespace-nowrap px-7">
                            stock
                        </th>
                        <th className="py-5 font-bold text-left align-middle whitespace-nowrap px-7">
                            Actions
                        </th>
                    </tr>
                </thead>
                {products.map((product) => (
                    <tbody key={product.id}>
                        <tr>
                            <td className="px-5 py-4 align-middle whitespace-nowrap">
                                {product.id}
                            </td>
                            <td className="px-5 py-4 align-middle max-w-[300px]">
                                {product.name}
                            </td>
                            <td className="px-5 py-4 align-middle whitespace-nowrap">
                                {product.price.toLocaleString("vi-VN", {
                                    style: "currency",
                                    currency: "VND",
                                })}
                            </td>
                            <td className="px-5 py-4 align-middle whitespace-nowrap">
                                {product.category}
                            </td>

                            <td>
                                <Link
                                    to={`/manage/product/${product.id}`}
                                    className="block px-5 py-3 text-white rounded-lg shadow-md cursor-pointer bg-gradient-to-r from-purple-600 to-pink-700"
                                >
                                    detail
                                </Link>
                            </td>
                            <td className="px-5 py-4 align-middle whitespace-nowrap">
                                <div className="flex items-center gap-2">
                                    <ActionEdit
                                        onClick={() => handleClick(product)}
                                    />
                                    {showForm && (
                                        <EditNameForm
                                            initialValues={initialValue}
                                            onSubmit={() => {
                                                handleSubmit(initialValue);
                                            }}
                                            onCancel={handleCancel}
                                        />
                                    )}
                                    <ActionDelete
                                        onClick={() => {
                                            handleDelete(product.id);
                                        }}
                                    />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default ProductManage;
