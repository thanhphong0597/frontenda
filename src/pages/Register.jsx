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
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { Field } from "../components/field";
import { Input } from "../components/input";
import { Logo } from "../components/logo";
import Document from "../components/title/Document";

const theme = createTheme();

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

const Register = () => {
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
    console.log('a')
    const handleRegister = (values) => {
        if (checked) {
            return new Promise((resolve, reject) => {
                resolve(values);
                console.log(values)
                const options = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },

                    body: JSON.stringify({
                        "username": values.fullname,
                        "firstName": values.fullname,
                        "lastName": values.lastName,
                        "email": values.email,
                        "password": values.password
                    }),
                };

                fetch("https://localhost:7091/api/auth/register", options)
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                    });
                navigate("/login");

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
        <ThemeProvider theme={theme}>
            <Document title="Bí kiếp làm giàu - Đăng Kí" />
            <CssBaseline />
            <AppBar
                position="absolute"
                className="bg-blue-500"
                elevation={0}
                sx={{
                    position: "relative",
                    borderBottom: (t) => `1px solid ${t.palette.divider}`,
                }}
            >
                <Toolbar>
                    <Logo
                        width={50}
                        height={50}
                        src="/logo2.jpg"
                        to="/"
                        className="mr-5"
                    />
                    <Typography variant="h6" color="white" noWrap>
                        Đăng kí
                    </Typography>
                </Toolbar>
            </AppBar>
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
                                    label="Tên đăng nhập"
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
                                    label="Mật khẩu"
                                    name="password"
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
                                    label="Tôi chấp nhận điều khoản"
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
                            Đăng kí
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
        </ThemeProvider>
    );
};

export default Register;
