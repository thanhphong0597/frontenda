import { ShoppingCart } from "@mui/icons-material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import GrainIcon from "@mui/icons-material/Grain";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
    Breadcrumbs,
    Button,
    Link,
    Rating,
    Stack,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { images } from "../assets/data/image";
import Radio from "../components/radio/Radio";
import Document from "../components/title/Document";
import { useData } from "../configs/contextData";

const Detail = () => {
    const { categoryId } = useParams();

    const [details, setDetails] = useState();
    const [detailsImage, setDetailsImage] = useState();
    const { addToCart } = useData();
    const [stockColor, setStockColor] = useState();
    const [stockSize, setStockSize] = useState();
    const [stockNumber, setStockNumber] = useState(0);

    const [selectColor, setSelectColor] = useState();
    const [selectSize, setSelectSize] = useState();
    const [count, setCount] = useState(0);
    const [selectNumber, setSelectNumber] = useState(1);

    useEffect(() => {
        let didCancel = false;

        async function fetchData(id) {
            const res = await fetch(
                `https://localhost:7091/api/products/${id}`,
            );
            const data = await res.json();

            if (!didCancel) {
                setDetails(data);
            }
        }

        fetchData(categoryId);

        return () => {
            didCancel = true;
        };
    }, [categoryId]);

    useEffect(() => {
        if (details) {
            const color = [...new Set(details?.stocks?.map((i) => i.color))];
            setStockColor(color);
            const size = [
                ...new Set(
                    details?.stocks
                        ?.filter((stock) => stock.color === selectColor)
                        .map((stock) => stock.size),
                ),
            ];
            setStockSize(size);
            const number = details?.stocks
                ?.filter((stock) => stock.color === selectColor)
                .filter((stock) => stock.size === selectSize)
                .map((stock) => stock.number);
            setStockNumber(number);
        }
    }, [details, selectColor, selectSize]);

    const handleClickColor = (color) => {
        setSelectColor(color);
        setSelectSize(null);
    };

    const handleClickSize = (size) => {
        setSelectSize(size);
    };

    if (!details) return;

    return (
        <div className="py-20 bg-kem">
            <Document title="Bí kiếp làm giàu - Detail" />
            <div className="container">
                <div>
                    <nav>
                        <ul className="flex items-center justify-start gap-5">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive
                                            ? ""
                                            : "text-blue-500 font-semibold"
                                    }
                                >
                                    Home{" "}
                                </NavLink>
                                <NavigateNextIcon />
                            </li>
                            <li>
                                <NavLink
                                    to={`/products/categories/${details.category}`}
                                    className={({ isActive }) =>
                                        isActive
                                            ? ""
                                            : "text-blue-500 font-semibold"
                                    }
                                >
                                    {details.category}{" "}
                                </NavLink>
                                <NavigateNextIcon />
                            </li>
                            <li>{details.name}</li>
                        </ul>
                    </nav>
                    <div className="flex bg-white">
                        <div className="p-5">
                            <div>
                                <img
                                    srcSet={`/images/img${categoryId}.jpg`}
                                    alt={details.name}
                                    className="h-[30rem]"
                                />
                            </div>
                            <div className="flex gap-5 my-3">
                                {images.slice(0, 4).map((image, index) => (
                                    <div
                                        className="w-20 h-20 shrink-0 "
                                        key={image}
                                        onClick={() => setDetailsImage(image)}
                                    >
                                        <img
                                            src={image}
                                            alt={image}
                                            className="object-cover w-full cursor-pointer"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-5">
                            <div className="flex flex-col gap-y-10">
                                <Typography variant="h5">
                                    {details.name}
                                </Typography>
                                <div role="presentation">
                                    <Breadcrumbs aria-label="breadcrumb">
                                        <Link
                                            underline="hover"
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "5px",
                                            }}
                                            color="inherit"
                                        >
                                            <Typography component="legend">
                                                {details.rate}
                                            </Typography>
                                            <Rating value={5} disabled />
                                        </Link>
                                        <Link
                                            underline="none"
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "5px",
                                            }}
                                            color="inherit"
                                        >
                                            <Typography
                                                component="span"
                                                className="border-b-2 border-black"
                                            >
                                                {details.count || 0}
                                            </Typography>
                                            <div className="capitalize">
                                                đánh giá
                                            </div>
                                        </Link>
                                        <Typography
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                            color="text.primary"
                                        >
                                            <GrainIcon
                                                sx={{ mr: 0.5 }}
                                                fontSize="inherit"
                                            />
                                            Breadcrumb
                                        </Typography>
                                    </Breadcrumbs>
                                </div>
                                <div className="p-5 bg-[#f5f5f5] ">
                                    <Typography
                                        variant="h5"
                                        textAlign={"center"}
                                    >
                                        {details.price.toLocaleString("vi-VN", {
                                            style: "currency",
                                            currency: "VND",
                                        })}
                                    </Typography>
                                </div>
                                <div className="flex items-center space-x-8">
                                    <Typography>Màu Sắc</Typography>
                                    <div className="flex gap-5">
                                        {stockColor?.map((color, index) => {
                                            return (
                                                <Radio
                                                    key={index}
                                                    name="color"
                                                    checked={
                                                        color === selectColor
                                                    }
                                                    onChange={() =>
                                                        handleClickColor(color)
                                                    }
                                                >
                                                    {color}
                                                </Radio>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className="flex items-center space-x-8">
                                    <Typography>Size</Typography>
                                    <div className="flex gap-5 ">
                                        {selectColor &&
                                            stockSize?.map((size, index) => (
                                                <Radio
                                                    key={index}
                                                    checked={
                                                        size === selectSize
                                                    }
                                                    onChange={() =>
                                                        handleClickSize(size)
                                                    }
                                                >
                                                    {size}
                                                </Radio>
                                            ))}
                                    </div>
                                </div>
                                <div className="flex items-center space-x-8">
                                    <Typography>Số lượng</Typography>
                                    <div className="flex">
                                        <span
                                            className="px-5 py-3 border cursor-pointer"
                                            onClick={() =>
                                                setSelectNumber(
                                                    selectNumber - 1,
                                                )
                                            }
                                        >
                                            -
                                        </span>
                                        <input
                                            type="number"
                                            className="py-3 text-center border "
                                            value={
                                                selectNumber >= stockNumber
                                                    ? stockNumber
                                                    : selectNumber
                                            }
                                            onChange={() =>
                                                setCount(selectNumber)
                                            }
                                        />
                                        <span
                                            className="px-5 py-3 border cursor-pointer"
                                            onClick={() =>
                                                setSelectNumber(
                                                    selectNumber + 1,
                                                )
                                            }
                                        >
                                            +
                                        </span>
                                    </div>
                                </div>
                                <Stack direction="row" spacing={2}>
                                    <Button
                                        variant="outlined"
                                        startIcon={<ShoppingCart />}
                                        onClick={() =>
                                            addToCart({
                                                id: details.id,
                                                size: selectSize,
                                                color: selectColor,
                                                number: selectNumber,
                                                name: details.name,
                                                price: details.price,
                                                title: details.title,
                                                image: `/img${categoryId}.jpg`,
                                            })
                                        }
                                    >
                                        Thêm vào giỏ hàng
                                    </Button>
                                    <Button variant="contained">
                                        Mua ngay
                                    </Button>
                                </Stack>
                            </div>
                        </div>
                    </div>
                    <div className="p-10 mt-10 bg-white">
                        <Typography variant="h4" className="p-5 bg-[#F5F5F5]">
                            Mô tả sản phẩm
                        </Typography>
                        <div className="p-5">
                            <Typography>
                                <AcUnitIcon />
                                {details.name}
                            </Typography>
                            <Typography component="div" className="p-5">
                                {details.description}
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
