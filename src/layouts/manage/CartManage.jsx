import React, { useEffect, useState } from "react";
import DetailCartForm from "../../components/action/DetailCartForm";
import Table from "../../components/table/Table";
import DashboardHeading from "../dashboard/DashboardHeading";

const CartManage = () => {
    const [carts, setCarts] = useState();
    const [show, setShow] = useState(false);

    useEffect(() => {
        fetch("https://localhost:7091/api/Carts")
            .then((res) => res.json())
            .then((data) => setCarts(data));
    }, []);
    const [initialVal, setInitialVal] = useState();
    const handleOnCancle = () => {
        setShow(false);
    };
    const handleOnClick = (cart) => {
        console.log(cart);
        setInitialVal(cart);
        setShow(true);
    };
    return (
        <div>
            {!carts ? (
                <div>...</div>
            ) : (
                <div>
                    <DashboardHeading
                        title="Prodution"
                        desc="Overview prodution monitor"
                    />
                    <Table>
                        <thead className="bg-[#f7f7f8]">
                            <tr className="capitalize">
                                <th className="py-5 font-bold text-left align-middle whitespace-nowrap px-7">
                                    ID
                                </th>
                                <th className="py-5 font-bold text-left align-middle whitespace-nowrap px-7">
                                    First Name
                                </th>
                                <th className="py-5 font-bold text-left align-middle whitespace-nowrap px-7">
                                    Last Name
                                </th>
                                <th className="py-5 font-bold text-left align-middle whitespace-nowrap px-7">
                                    Address
                                </th>
                                <th className="py-5 font-bold text-left align-middle whitespace-nowrap px-7">
                                    Phone Number
                                </th>
                                <th className="py-5 font-bold text-left align-middle whitespace-nowrap px-7">
                                    Detail
                                </th>
                            </tr>
                        </thead>
                        {carts.map((cart) => (
                            <tbody key={cart.id}>
                                <tr>
                                    <td className="px-5 py-4 align-middle whitespace-nowrap">
                                        {cart.id}
                                    </td>
                                    <td className="px-5 py-4 align-middle whitespace-nowrap">
                                        {cart.firstName}
                                    </td>
                                    <td className="px-5 py-4 align-middle whitespace-nowrap">
                                        {cart.lastName}
                                    </td>
                                    <td className="px-5 py-4 align-middle whitespace-nowrap">
                                        {cart.address}
                                    </td>

                                    <td>{cart.phoneNumber}</td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                handleOnClick(
                                                    cart.cart_ProductModels,
                                                )
                                            }
                                            className="block px-5 py-3 text-white rounded-lg shadow-md cursor-pointer bg-gradient-to-r from-purple-600 to-pink-700"
                                        >
                                            detail
                                        </button>
                                        {show && (
                                            <DetailCartForm
                                                initValue={initialVal}
                                                onCancle={handleOnCancle}
                                            />
                                        )}
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </Table>
                </div>
            )}
        </div>
    );
};

export default CartManage;
