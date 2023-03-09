import PropTypes from "prop-types";
import React from "react";

const Radio = ({ children, checked, name, ...props }) => {
    return (
        <label>
            <input
                type="radio"
                checked={checked}
                className="sr-only"
                {...props}
            />
            <div className="flex items-center font-medium cursor-pointer gap-x-3">
                <div
                    className={`flex items-center justify-center p-1 border rounded-full w-7 h-7 ${
                        checked
                            ? "text-white border-primary bg-pink-500"
                            : "border-gray-200 text-transparent"
                    }`}
                >
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
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>
                <span>{children}</span>
            </div>
        </label>
    );
};

Radio.propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
};

export default Radio;
