import React from "react";

const Table = ({ children }) => {
    return (
        <div className="overflow-x-auto bg-white rounded-xl overflow-y-auto h-[500px] ">
            <table className="w-full ">{children}</table>
        </div>
    );
};

export default Table;
