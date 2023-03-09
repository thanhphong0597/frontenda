import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CheckboxLabels from "../components/checkbox/CheckboxLabels";
import Document from "../components/title/Document";
import { useData } from "../configs/contextData";

const Cart = () => {
    const { storageCarts, total, deleteCart } = useData();
    console.log("🚀 ~ file: Cart.jsx:10 ~ Cart ~ storageCarts:", storageCarts);
    const [checkbox, setCheckbox] = useState(false);

    // useEffect(() => {
    //     const options = {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({
    //             firstName: "long khung",
    //             lastName: "hieu",
    //             address: "asdf",
    //             phoneNumber: "0123456122",
    //             cart_ProductModels: [
    //                 {
    //                     product: "",
    //                     color: "do",
    //                     size: 32,
    //                     number: 1,
    //                 },
    //                 {
    //                     product: "vay",
    //                     color: "hong",
    //                     size: 44,
    //                     number: 2,
    //                 },
    //             ],
    //         }),
    //     };
    //     fetch("https://localhost:7091/api/carts", options)
    //         .then((res) => res.json())
    //         .then((data) => console.log(data));
    // }, []);

    if (!storageCarts) return;

    return (
        <div className="h-screen bg-kem">
            <Document title="Bí kiếp làm giàu - Giỏ hàng" />
            <div className="container p-5 ">
                <div className="flex flex-col gap-y-5">
                    {storageCarts.map((cart, index) => {
                        return (
                            <div
                                key={index}
                                className="flex items-center justify-between p-5 border border-black bg-kem"
                            >
                                <CheckboxLabels
                                    onChange={(input) =>
                                        console.log(
                                            (input.checked = true
                                                ? false
                                                : true),
                                        )
                                    }
                                    checked={checkbox}
                                />
                                {!cart.image ? (
                                    <div className="flex items-center justify-center w-20 h-20 border-2 border-black">
                                        <div className="w-12 h-12 border-2 border-pink-500 rounded-full border-l-transparent border-r-transparent animate-spin"></div>
                                    </div>
                                ) : (
                                    <img
                                        src={`images/${cart.image}`}
                                        alt={cart.name}
                                        className="h-20"
                                        loading="lazy"
                                    />
                                )}

                                <Typography>{cart.name}</Typography>
                                <div>
                                    <Typography variant="span">
                                        Phân Loại
                                    </Typography>
                                    <div className="flex items-center gap-5">
                                        <Typography variant="span">
                                            Màu: {cart.color}
                                        </Typography>
                                        <Typography variant="span">
                                            Kích thước: {cart.size}
                                        </Typography>
                                    </div>
                                </div>
                                <Typography>
                                    {cart.price.toLocaleString("vi-VN", {
                                        style: "currency",
                                        currency: "VND",
                                    })}
                                </Typography>
                                <div className="flex items-center space-x-8">
                                    <div className="flex">
                                        <span className="px-5 py-3 border cursor-pointer">
                                            -
                                        </span>
                                        <TextField
                                            type="number"
                                            className="w-20"
                                            value="1"
                                        />
                                        <span className="px-5 py-3 border cursor-pointer">
                                            +
                                        </span>
                                    </div>
                                </div>
                                <Typography color={"red"}>
                                    {cart.price.toLocaleString("vi-VN", {
                                        style: "currency",
                                        currency: "VND",
                                    })}
                                </Typography>
                                <Typography
                                    gutterBottom
                                    component="button"
                                    color="red"
                                    onClick={() => deleteCart(cart.id)}
                                >
                                    Xóa
                                </Typography>
                            </div>
                        );
                    })}
                </div>
                <div className="sticky bottom-0 left-0 right-0 mt-5 bg-white">
                    <div className="p-10">
                        <div className="flex items-center justify-between">
                            <CheckboxLabels
                                item={`Chọn tất cả (${storageCarts.length})`}
                                onChange={(e) => setCheckbox(e.checked)}
                            />
                            <div className="flex gap-4">
                                <Typography>
                                    Tổng thanh toán ({storageCarts.length}) sản
                                    phẩm:
                                </Typography>
                                <div>
                                    <Typography>
                                        {total.toLocaleString("vi-VN", {
                                            style: "currency",
                                            currency: "VND",
                                        })}
                                    </Typography>
                                </div>
                            </div>
                            <Link to={"/checkout"}>
                                <Button variant="contained">Mua hàng</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
