import LoadingButton from "@mui/lab/LoadingButton";
import {
    Box,
    createTheme,
    CssBaseline,
    Grid,
    MenuItem,
    Select,
    ThemeProvider,
} from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Field } from "../../components/field";
import { Input } from "../../components/input";
import Document from "../../components/title/Document";
import { useData } from "../../configs/contextData";
import DashboardHeading from "../dashboard/DashboardHeading";

const theme = createTheme();

const ProductAddNew = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm({
        mode: "onChange",
        defaultValues: {
            name: "",
            title: "",
            category: "",
            color: "",
            size: "",
            number: "",
        },
    });
    const title = [
        "Áo nam",
        "Quần nam",
        "Áo nữ",
        "Quần nữ",
        "Váy nữ",
        "Túi xách",
        "Giày",
    ];
    const category = [
        { label: "ao nam", value: 1 },
        { label: "quan nam", value: 2 },
        { label: "ao nu", value: 3 },
        { label: "quan nu", value: 4 },
        { label: "vay nu", value: 5 },
        { label: "tui xach", value: 7 },
        { label: "giay", value: 8 },
    ];
    const { createProduct, setCreateProduct } = useData();

    const handleAddProduct = (values) => {
        try {
            const cloneValues = { ...values };
            console.log(cloneValues);
            setCreateProduct(cloneValues);
            reset({
                name: "",
                title: "",
                category: "",
                color: "",
                price: "",
                size: "",
                number: "",
            });
            const options = {
                method: "POST",
                headers: { "Content-Type": "application/json" },

                body: JSON.stringify({
                    name: cloneValues.name,
                    title: cloneValues.title,
                    price: cloneValues.price,
                    categoryID: cloneValues.category,
                    color: cloneValues.color || " ",
                    size: cloneValues.size || 0,
                    number: cloneValues.number,
                }),
            };

            fetch("https://localhost:7091/api/products/addproduct", options)
                .then((res) => res.json())
                .then((data) => console.log(data));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Document title="Bí kiếp làm giàu - Product add new" />
            <CssBaseline />
            <DashboardHeading title="Add product" desc="Add new product" />
            <Box
                component="form"
                sx={{ mt: 3 }}
                autoComplete="off"
                onSubmit={handleSubmit(handleAddProduct)}
            >
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Field>
                            <Input
                                name="name"
                                label="Tên sản phẩm"
                                control={control}
                            />
                        </Field>
                    </Grid>
                    <Grid item xs={6}>
                        <Field>
                            <Input
                                name="price"
                                label="Giá sản phẩm"
                                control={control}
                                type="number"
                            />
                        </Field>
                    </Grid>
                    <Grid item xs={6}>
                        <Field>
                            <Controller
                                name="title"
                                control={control}
                                defaultValue="Men"
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <Select {...field} label="Title">
                                        {title.map((option) => (
                                            <MenuItem
                                                key={option}
                                                value={option}
                                            >
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                )}
                            />
                            {errors.title && (
                                <span className="text-red-600">
                                    This field is required
                                </span>
                            )}
                        </Field>
                    </Grid>

                    <Grid item xs={6}>
                        <Field>
                            <Controller
                                name="category"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <Select {...field} label="category">
                                        {category.map((option) => (
                                            <MenuItem
                                                key={option.value}
                                                value={option.value}
                                            >
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                )}
                            />
                            {errors.title && (
                                <span className="text-red-600">
                                    This field is required
                                </span>
                            )}
                        </Field>
                    </Grid>
                    <Grid item xs={6}>
                        <Field>
                            <Input label="Màu" name="color" control={control} />
                        </Field>
                    </Grid>
                    <Grid item xs={6}>
                        <Field>
                            <Input
                                label="Kích thước"
                                name="size"
                                control={control}
                                type="number"
                            />
                        </Field>
                    </Grid>
                    <Grid item xs={6}>
                        <Field>
                            <Input
                                type="number"
                                label="Số lượng"
                                name="number"
                                control={control}
                            />
                        </Field>
                    </Grid>
                </Grid>
                <LoadingButton
                    color="secondary"
                    variant="contained"
                    type="submit"
                    fullWidth
                    sx={{ mt: 3 }}
                >
                    Create
                </LoadingButton>
            </Box>
        </ThemeProvider>
    );
};

export default ProductAddNew;
