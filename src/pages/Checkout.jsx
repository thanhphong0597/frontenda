import {
    AppBar,
    Box,
    Button,
    Container,
    createTheme,
    CssBaseline,
    Paper,
    Step,
    StepLabel,
    Stepper,
    ThemeProvider,
    Toolbar,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { steps } from "../assets/data/steps";
import { Logo } from "../components/logo";
import Document from "../components/title/Document";
import { useData } from "../configs/contextData";
import AddressForm from "../layouts/shipping/AddressForm";
import PaymentForm from "../layouts/shipping/PaymentForm";
import Review from "../layouts/shipping/Review";

const theme = createTheme();
const Checkout = () => {
    const { addClient, client, storageCarts } = useData();
    const [activeStep, setActiveStep] = useState(0);
    const {
        handleSubmit,
        register,
        formState: { errors, isValid },
    } = useForm();
    const navigation = useNavigate();

    function getStepContent(step) {
        switch (step) {
            case 0:
                return (
                    <AddressForm
                        register={register}
                        errors={errors}
                        isValid={isValid}
                    />
                );
            case 1:
                return <PaymentForm />;
            case 2:
                return <Review />;
            default:
                break;
        }
    }

    const handleNextStep = (values) => {
        if (!isValid) return;
        if (activeStep !== 1) addClient(values);
        if (activeStep === 2) {
            const cl = client;
            const carts = storageCarts.map((cart) => {
                return {
                    product: cart.name,
                    color: cart.color,
                    size: cart.size,
                    number: cart.number,
                };
            });
            console.log("carts:", carts);
            console.log("cl:", cl);
            console.log("cart_ProductModels:", carts);
            const options = {
                method: "POST",
                headers: { "Content-Type": "application/json" },

                body: JSON.stringify({
                    firstName: cl.firstName,
                    lastName: cl.lastName,
                    address: cl.address,
                    phoneNumber: cl.phoneNumber,
                    cart_ProductModels: [...carts],
                }),
            };

            fetch("https://localhost:7091/api/carts", options)
                .then((res) => res.json())
                .then((data) => console.log(data));
            navigation("/");
        }
        setActiveStep(activeStep + 1);
    };

    const handleBackStep = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <ThemeProvider theme={theme}>
            <Document title="Bí kiếp làm giàu - Checkout" />
            <CssBaseline />
            <AppBar
                position="absolute"
                color="default"
                elevation={0}
                sx={{
                    position: "relative",
                    borderBottom: (t) => `1px solid ${t.palette.divider}`,
                }}
            >
                <Link to="/">
                    <Toolbar
                        sx={{
                            display: "flex",
                            gap: "20px",
                            alignItems: "center",
                        }}
                    >
                        <Logo src="/logo2.jpg" width="60px" height="60px" />
                        <Typography
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{
                                fontWeight: "bold",
                            }}
                        >
                            BÍ KIẾP LÀM GIÀU
                        </Typography>
                    </Toolbar>
                </Link>
            </AppBar>
            <Container component="main" sx={{ mb: 4 }}>
                <Paper
                    variant="outlined"
                    sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
                >
                    <Typography component="h1" variant="h4" align="center">
                        Checkout
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((step, index) => (
                            <Step
                                key={step}
                                sx={{ textTransform: "capitalize" }}
                            >
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <>
                            <Typography>
                                chuc mung ban da dat hang thanh cong
                            </Typography>
                        </>
                    ) : (
                        <Box component="form" autoComplete="off">
                            {getStepContent(activeStep)}
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                }}
                            >
                                {activeStep !== 0 && (
                                    <Button
                                        onClick={handleBackStep}
                                        sx={{ mt: 3, ml: 1 }}
                                    >
                                        Back
                                    </Button>
                                )}
                                <Button
                                    type="submit"
                                    variant="contained"
                                    onClick={handleSubmit(handleNextStep)}
                                    sx={{ mt: 3, ml: 1 }}
                                >
                                    {activeStep === steps.length - 1
                                        ? "Đặt hàng"
                                        : "Tiếp"}
                                </Button>
                            </Box>
                        </Box>
                    )}
                </Paper>
            </Container>
        </ThemeProvider>
    );
};

export default Checkout;
