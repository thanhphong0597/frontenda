import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ActionDelete from "../../components/action/ActionDelete";
import ActionEdit from "../../components/action/ActionEdit";
import AddStockForm from "../../components/action/AddStockForm";
import EditStockForm from "../../components/action/EditStockForm";
import Table from "../../components/table/Table";
import DashboardHeading from "../dashboard/DashboardHeading";

const StockManage = () => {
    const { id } = useParams();
    const [stock, setStock] = useState([]);

    useEffect(() => {
        if (id) {
            async function fetchData() {
                const res = await fetch(
                    `https://localhost:7091/api/products/${id}`,
                );
                const data = await res.json();
                setStock(data?.stocks);
                return data;
            }
            fetchData();
            return () => fetchData;
        }
    }, [id]);

    const [showForm, setShowForm] = useState(false);
    const [initialValue, setInitialValue] = useState({});
    const [showAddForm, setShowAddForm] = useState(false);
    const handleShowForm = () => {
        setShowForm(true);
    };
    const handleClick = (item) => {
        setInitialValue({ id, ...item });
        console.log({ id, ...item });
        setShowForm(true);
    };
    const handleSubmit = () => {
        setShowForm(false);
    };
    const handleCancel = () => {
        setShowForm(false);
    };

    const handleSubmitAdd = () => {
        setShowAddForm(false);
    };
    const handleCancleAdd = () => {
        setShowAddForm(false);
    };
    const handleOnClick = (item) => {
        console.log(item);
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },

            body: JSON.stringify({
                id: id,
                color: item.color,
                size: item.size || 0,
                number: item.number || 1,
            }),
        };

        fetch("https://localhost:7091/api/stocks/deletestock", options)
            .then((res) => res.json())
            .then((data) => console.log(data));
    };
    return (
        <div>
            <div className="flex justify-end py-3">
                <button
                    onClick={() => setShowAddForm(true)}
                    className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                    Add Stock
                </button>
                {showAddForm && (
                    <AddStockForm
                        initialValues={id}
                        onSubmit={handleSubmitAdd}
                        onCancle={handleCancleAdd}
                    />
                )}
            </div>
            <DashboardHeading title="Prodution" desc="Stocks" />
            <Table>
                <thead className="bg-[#f7f7f8]">
                    <tr className="capitalize">
                        <th className="py-5 font-bold text-left align-middle whitespace-nowrap px-7">
                            color
                        </th>
                        <th className="py-5 font-bold text-left align-middle whitespace-nowrap px-7">
                            size
                        </th>
                        <th className="py-5 font-bold text-left align-middle whitespace-nowrap px-7">
                            number
                        </th>
                        <th className="py-5 font-bold text-left align-middle whitespace-nowrap px-7">
                            actions
                        </th>
                    </tr>
                </thead>
                {stock.map((item, index) => (
                    <tbody key={index}>
                        <tr>
                            <td className="px-5 py-4 align-middle whitespace-nowrap">
                                {item.color}
                            </td>
                            <td className="px-5 py-4 align-middle whitespace-nowrap">
                                {item.size}
                            </td>
                            <td className="px-5 py-4 align-middle whitespace-nowrap">
                                {item.number}
                            </td>
                            <td className="px-5 py-4 align-middle whitespace-nowrap">
                                <div className="flex items-center gap-2">
                                    <ActionEdit
                                        onClick={() => handleClick(item)}
                                    />
                                    {showForm && (
                                        <EditStockForm
                                            initialValues={initialValue}
                                            onSubmit={handleSubmit}
                                            onCancle={handleCancel}
                                        />
                                    )}
                                    <ActionDelete
                                        onClick={() => handleOnClick(item)}
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

export default StockManage;
