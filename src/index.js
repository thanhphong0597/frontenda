import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ProviderData } from "./configs/contextData";
import "./index.scss";
import Categories from "./layouts/categories/Categories";
import DashboardLayout from "./layouts/dashboard/DashboardLayout";
import CartManage from "./layouts/manage/CartManage";
import CategoryManage from "./layouts/manage/CategoryManage";
import ProductAddNew from "./layouts/manage/ProductAddNew";
import ProductManage from "./layouts/manage/ProductManage";
import StockManage from "./layouts/manage/StockManage";
import UserManage from "./layouts/manage/UserManage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Dashboard from "./pages/Dashboard";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Main from "./pages/Main";
import NotFoundPage from "./pages/NotFoundPage";
import Products from "./pages/Products";
import Register from "./pages/Register";
import Story from "./pages/Story";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
    {
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/san-pham/",
                element: <Products />,
                children: [
                    {
                        path: ":category",
                        element: <Categories />,
                    },
                ],
            },
            {
                path: "/:category/:categoryId",
                element: <Detail />,
            },
            {
                path: "/gioi-thieu",
                element: <Story />,
            },
        ],
    },
    {
        element: <DashboardLayout />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/manage/add-product",
                element: <ProductAddNew />,
            },
            {
                path: "/manage/products",
                element: <ProductManage />,
            },
            {
                path: "/manage/category",
                element: <CategoryManage />,
            },
            {
                path: "/manage/user",
                element: <UserManage />,
            },
            {
                path: "/manage/product/:id",
                element: <StockManage />,
            },
            {
                path: "/manage/cartmanage",
                element: <CartManage />,
            },
        ],
    },
    {
        path: "/cart",
        element: <Cart />,
    },
    {
        path: "/checkout",
        element: <Checkout />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ProviderData>
        <RouterProvider router={router}></RouterProvider>,
        <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false}
            theme="light"
        />
    </ProviderData>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
