import React from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
    return (
        <div className="max-w-[1600px] mx-auto my-0">
            <DashboardHeader></DashboardHeader>
            <div className="grid px-5 py-10 grid-cols-300 gap-x-10">
                <Sidebar />
                <div className="dashboard-children">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
