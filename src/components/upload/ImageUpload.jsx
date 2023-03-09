import React from "react";
import { useController } from "react-hook-form";

const ImageUpload = ({
    className = "",
    control,
    image = "",
    name = "",
    ...props
}) => {
    const { field } = useController({
        name,
        control,
        defaultValue: "",
    });

    return (
        <label
            className={`${className} flex items-center justify-center cursor-pointer min-h-[200px] rounded-lg relative overfow-hidden w-[300px] border-pink-500 border group`}
        >
            <input
                type="file"
                className="sr-only"
                name={name}
                {...field}
                {...props}
            />
            {!image && (
                <div className="flex flex-col items-center text-center pointer-events-none ">
                    <img
                        src="/img-upload.png"
                        alt="upload-img"
                        className="object-cover w-full mb-5"
                    />
                    <p className="font-semibold">Choose photo</p>
                </div>
            )}
            {image && (
                <>
                    <img
                        src={`/${image}`}
                        alt=""
                        className="object-cover w-full h-full"
                    />
                    <button
                        type="button"
                        className="absolute top-0 flex items-center justify-center invisible w-16 h-16 text-red-700 transition-all bg-white bg-opacity-50 rounded-lg shadow-lg group-hover:top-1/2 group-hover:-translate-y-1/2 group-hover:visible group-hover:bg-opacity-100"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                        </svg>
                    </button>
                </>
            )}
        </label>
    );
};

export default ImageUpload;
