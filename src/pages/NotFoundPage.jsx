import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="relative flex flex-col items-center justify-center h-screen">
            <img
                src="/404.jpg"
                alt="Page not found"
                className="w-full h-full"
            />
            <div className="absolute top-1/4 ">
                <Link
                    to="/"
                    className="p-3 mt-8 text-white transition duration-300 bg-gray-500 rounded-md hover:bg-blue-600"
                >
                    Go back to homepage
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
