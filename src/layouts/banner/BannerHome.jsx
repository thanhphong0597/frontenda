import React from "react";
import { Link } from "react-router-dom";

const BannerHome = ({ item }) => {
    return (
        <div className="relative">
            <div className="w-full">
                <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full "
                />
            </div>
            <div className="absolute bottom-0 left-0 items-center justify-center w-2/4 px-20 top-2/4 -translate-y-2/4 ">
                <div className="flex flex-col items-start justify-center ">
                    <p
                        className="mb-4 font-bold"
                        style={{
                            color: "transparent",
                            backgroundImage: `linear-gradient(to left bottom, ${item.primaryColor}, ${item.secondaryColor})`,
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        {item.Trend}
                    </p>
                    <h1 className={`text-5xl font-semibold mb-10 text-white`}>
                        {item.Title}
                    </h1>
                    <p className="mb-10 text-gray-400">{item.Description}</p>
                    <Link to={"/register"}>
                        <button
                            className={`flex items-center justify-center w-56 h-16 text-white rounded-lg`}
                            style={{
                                backgroundImage: `linear-gradient(to left, ${item.primaryColor}, ${item.secondaryColor} )`,
                            }}
                        >
                            SHOP CLOTHES
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BannerHome;
