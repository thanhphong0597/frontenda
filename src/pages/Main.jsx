import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "./Footer";

const Main = () => {
    return (
        <div>
            <Header />
            <div className="router">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;
