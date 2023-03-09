import { yupResolver } from "@hookform/resolvers/yup";
import LoadingButton from "@mui/lab/LoadingButton";
import {
    createTheme,
    Grid,
    Link,
    Paper,
    ThemeProvider,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Autoplay, Keyboard, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import * as yup from "yup";
import { Field } from "../components/field";
import Input from "../components/input/Input";
import { Logo } from "../components/logo";
import Document from "../components/title/Document";
import { useData } from "../configs/contextData";
const theme = createTheme();

const schema = yup.object({
    username: yup.string().required("Bạn chưa nhập name"),
    password: yup.string().required("Bạn chưa mật khẩu"),
});

const Login = () => {
    const navigate = useNavigate();
    const { token, getToken, products } = useData();
    console.log("🚀 ~ file: Login.jsx:38 ~ Login ~ products:", products);
    const {
        handleSubmit,
        formState: { errors, isSubmitting },
        control,
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    });

    const handleLogin = (values) => {
        return new Promise((resolve, reject) => {
            return setTimeout(() => {
                resolve(values);
                const options = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },

                    body: JSON.stringify({
                        username: values.username,
                        password: values.password,
                    }),
                };

                fetch("https://localhost:7091/api/auth/login", options)
                    .then((res) => res.json())
                    .then((data) => {
                        getToken(data);
                    });
               
                navigate("/");
            }, 1000);
        });
    };

    // useEffect(() => {
    //     console.log(token)
    //     if (token !== null) {
    //         console.log(token);
    //         var decoded = jwt_decode(token);
    //         console.log(decoded);
    //     } else {
    //         console.log("Token is null.");
    //     }

    //     return getToken({})
    // }, )

    useEffect(() => {
        const errorLogin = Object.values(errors);
        if (errorLogin.length > 0) {
            toast.error(errorLogin[0].message, {
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
            <Document title="Bí kiếp làm giàu - Đăng Nhập" />
            <Grid
                container
                component="main"
                sx={{
                    height: "100vh",
                    display: "flex",
                }}
            >
                <Grid item xs={12} sm={4} md={7}>
                    <Swiper
                        cssMode={true}
                        mousewheel={true}
                        keyboard={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        modules={[Mousewheel, Keyboard, Autoplay]}
                        className="mySwiper"
                    >
                        {products.slice(7, 14).map((product) => (
                            <SwiperSlide key={product.id}>
                                <img
                                    src={`/images/img${product.id}.jpg`}
                                    alt={product.name}
                                    className="object-cover w-full h-full"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Grid>

                <Grid item xs={12} sm={8} md={5} component={Paper}>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Logo width={150} height={150} src="logo.jpg" to="/" />
                        <Typography component="h1" variant="h5">
                            Đăng nhập
                        </Typography>
                        <Box
                            component="form"
                            sx={{
                                mt: 1,
                            }}
                            autoComplete="off"
                            onSubmit={handleSubmit(handleLogin)}
                        >
                            <Grid container spacing={2}>
                                <Field item xs={12}>
                                    <Input
                                        name="username"
                                        label="username"
                                        control={control}
                                    />
                                </Field>
                                <Field item xs={12}>
                                    <Input
                                        name="password"
                                        label="Mật khẩu"
                                        control={control}
                                        togglePassword={true}
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
                                Đăng Nhập
                            </LoadingButton>

                            <Grid
                                container
                                sx={{ mt: 2 }}
                                justifyContent="flex-end"
                            >
                                <Link href="/register" variant="body2">
                                    {"Bạn chưa có đăng kí tài khoản? Đăng kí"}
                                </Link>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default Login;
