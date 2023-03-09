import React from "react";

const DashboardHeading = ({ title = "", desc = "", children }) => {
    return (
        <div className="flex items-center justify-between mb-10">
            <div>
                <h1 className="mb-1 text-2xl font-bold text-black">{title}</h1>
                <p className="text-sm text-gray80">{desc}</p>
            </div>
        </div>
    );
};

export default DashboardHeading;
