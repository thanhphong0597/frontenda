import React from "react";
import { NavLink } from "react-router-dom";
import { useData } from "../../configs/contextData";

const sidebarLinks = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
            </svg>
        ),
    },
    {
        title: "Production",
        url: "/manage/products",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
            </svg>
        ),
    },
    {
        title: "Cart",
        url: "/manage/cartmanage",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2 5h16a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V7a2 2 0 012-2zM6 9h3M13 9h3M6 14h12M5 7h14"
                />
            </svg>
        ),
    },
    {
        title: "Logout",
        url: "/",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 16l-4-4m0 0l-4-4m4 4h-8m12 12H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2z"
                />
            </svg>
        ),
    },
];

const Sidebar = () => {
    const { storageCarts, clearCart, getToken } = useData();
    console.log(storageCarts);
    const handleLinkClick = () => {
        clearCart();
        getToken({})
    };

    return (
        <div className="w-[300px] shadow-md rounded-xl bg-[#ffffff]">
            {sidebarLinks.length > 0 &&
                sidebarLinks.map((link) => {
                    if (link.title === "Logout") {
                        return (
                            <NavLink
                                key={link.title}
                                to={link.url}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "14px 20px",
                                    gap: "20px",
                                    fontWeight: 500,
                                    cursor: "pointer",
                                    marginBottom: "20px",
                                    transition:
                                        "background-color .5s ease, color 1s ease",
                                }}
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-pink-500 text-white"
                                        : "bg-white text-black"
                                }
                                onClick={handleLinkClick}
                            >
                                <span>{link.icon}</span>
                                <span>{link.title}</span>
                            </NavLink>
                        );
                    } else {
                        return (
                            <NavLink
                                key={link.title}
                                to={link.url}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "14px 20px",
                                    gap: "20px",
                                    fontWeight: 500,
                                    cursor: "pointer",
                                    marginBottom: "20px",
                                    transition:
                                        "background-color .5s ease, color 1s ease",
                                }}
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-pink-500 text-white"
                                        : "bg-white text-black"
                                }
                            >
                                <span>{link.icon}</span>
                                <span>{link.title}</span>
                            </NavLink>
                        );
                    }
                })}
        </div>
    );
};

export default Sidebar;
