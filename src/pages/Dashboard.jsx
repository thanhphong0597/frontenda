import React from "react";
import Document from "../components/title/Document";
import DashboardHeading from "../layouts/dashboard/DashboardHeading";
import { yupResolver } from "@hookform/resolvers/yup";
import LoadingButton from "@mui/lab/LoadingButton";
import {
    AppBar,
    Box,
    Checkbox,
    Container,
    createTheme,
    CssBaseline,
    FormControlLabel,
    Grid,
    Link,
    ThemeProvider,
    Toolbar,
    Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { Field } from "../components/field";
import { Input } from "../components/input";
import { Logo } from "../components/logo";
import { useData } from "../configs/contextData";
const schema = yup.object({
    fullname: yup.string().required("bạn chưa nhập họ và tên"),
    email: yup
        .string()
        .email("email không chính xác")
        .required("bạn nhập email"),
    password: yup
        .string()
        .max(20, "chỉ giới hạn 20 kí tự")
        .matches(
            /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,}$/,
            "Mật khẩu phải chứa ít nhất 7 kí tự bao gồm ít nhất một chữ hoa và một kí tự đặc biệt (!@#$%^&*)"
        )
        .required("bạn chưa có nhập mật khẩu"),
});
const Dashboard = () => {
    const {token} = useData();
    const {
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    });
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();

    const handleRegister = (values) => {
        if (checked) {
            return new Promise((resolve, reject) => {
                resolve(values);
                console.log(values)
                console.log(token.token)
                const options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token.token}`
                    },

                    body: JSON.stringify({
                        "username": values.fullname,
                        "firstName": values.fullname,
                        "lastName": values.lastName,
                        "email": values.email,
                        "password": values.password
                    }),
                };

                fetch("https://localhost:7091/api/auth/register-admin", options)
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                    });

            });
        } else {
            toast.error("chưa tích vào ô cam kết", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
            });
        }
    };
    useEffect(() => {
        const errorArray = Object.values(errors);
        if (errorArray.length > 0) {
            toast.error(errorArray[0].message, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
            });
        }
    }, [errors]);
    return (
        <div>
            <Document title="Bí kiếp làm giàu - Dashboard" />
            <DashboardHeading
                title="Dashboard"
            />
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Logo width={150} height={150} src="logo.jpg" to="/" />
                    <Typography component="h1" variant="h5">
                        Đăng kí
                    </Typography>
                    <Box
                        component="form"
                        sx={{ mt: 3 }}
                        autoComplete="off"
                        onSubmit={handleSubmit(handleRegister)}
                    >
                        <Grid container spacing={2}>
                            <Field item xs={12}>
                                <Input
                                    name="fullname"
                                    label="User Name"
                                    control={control}
                                />
                            </Field>
                            <Field item xs={12}>
                                <Input
                                    name="email"
                                    label="Email"
                                    type="email"
                                    control={control}
                                />
                            </Field>
                            <Field item xs={12}>
                                <Input
                                    name="password"
                                    label="Password"
                                    togglePassword={true}
                                    control={control}
                                />
                            </Field>
                            <Field item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="allowExtraEmails"
                                            color="primary"
                                            onChange={(input) =>
                                                setChecked(input.target.checked)
                                            }
                                        />
                                    }
                                    label="I have read and I accept the terms and conditions"
                                />
                            </Field>
                        </Grid>
                        <LoadingButton
                            color="secondary"
                            loading={isSubmitting}
                            variant="contained"
                            type="submit"
                            fullWidth
                            disabled={isSubmitting}
                            sx={{ mt: 3 }}
                        >
                            Register-Admin
                        </LoadingButton>

                        <Grid
                            container
                            justifyContent="flex-end"
                            className="mt-5"
                        >
                            <Grid item>
                                <Link href="login" variant="body2">
                                    Bạn có tài khoản chưa? Đăng nhập
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </div>
    );
};

export default Dashboard;
