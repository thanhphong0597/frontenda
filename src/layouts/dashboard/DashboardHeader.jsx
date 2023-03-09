import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../components/logo";

const DashboardHeader = () => {
    return (
        <div className="flex justify-between gap-5 p-5 bg-white itens-center border border-b-2 border-solid border-[#eee]">
            <Logo
                to="/"
                src="/logo.jpg"
                width={80}
                height={80}
                title="Hội làm giàu"
                className="flex items-center gap-5 text-lg font-semibold"
            />
            <div className="flex items-center gap-5">
                <Link to={"/manage/add-product"}>
                    <button className="flex items-center justify-center px-6 text-base font-bold text-white rounded-lg cursor-pointer h-14 bg-gradient-to-r from-purple-500 to-pink-500">
                        Write new product
                    </button>
                </Link>
                <Link to={"/profile"} className="w-14 h-14">
                    <img
                        src="https://source.unsplash.com/random"
                        alt="avatar"
                        className="object-cover w-full h-full rounded-full"
                    />
                </Link>
            </div>
        </div>
    );
};

export default DashboardHeader;
