import { Table } from "@mui/material";
import React from "react";

function DetailCartForm({ initValue = {}, onCancle }) {
    const handleCancel = () => {
        console.log("formCancle");
        onCancle();
    };

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-6 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <div className="fixed z-10 p-8 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg top-1/2 left-1/2">
                    <h2 className="mb-4 text-2xl font-bold">
                        Chi tiết đơn hàng
                    </h2>
                    <Table onClick={handleCancel}>
                        <thead className="bg-[#f7f7f8]">
                            <tr className="capitalize">
                                <th className="py-5 font-bold text-left align-middle whitespace-nowrap px-7">
                                    ID
                                </th>
                                <th className="py-5 font-bold text-left align-middle whitespace-nowrap px-7">
                                    Product
                                </th>
                                <th className="py-5 font-bold text-left align-middle whitespace-nowrap px-7">
                                    Color
                                </th>
                                <th className="py-5 font-bold text-left align-middle whitespace-nowrap px-7">
                                    Size
                                </th>
                                <th className="py-5 font-bold text-left align-middle whitespace-nowrap px-7">
                                    Number
                                </th>
                            </tr>
                        </thead>
                        {initValue.map((item, index) => (
                            <tbody key={index}>
                                <tr>
                                    <td className="px-5 py-4 align-middle whitespace-nowrap">
                                        {index}
                                    </td>
                                    <td className="px-5 py-4 align-middle whitespace-nowrap">
                                        {item.product}
                                    </td>
                                    <td className="px-5 py-4 align-middle whitespace-nowrap">
                                        {item.color}
                                    </td>
                                    <td className="px-5 py-4 align-middle whitespace-nowrap">
                                        {item.size}
                                    </td>
                                    <td>{item.number}</td>
                                </tr>
                            </tbody>
                        ))}
                    </Table>
                    <div className="flex justify-end mt-4">
                        <button
                            className="px-4 py-2 text-white bg-red-500 rounded-md"
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailCartForm;
