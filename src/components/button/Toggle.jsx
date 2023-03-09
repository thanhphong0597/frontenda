import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";
import { useToggle } from "../hooks/useToggle";

const Toggle = () => {
    const [isToggle, toggle] = useToggle(false);
    return (
        <div className="flex items-center justify-end mt-10 gap-x-3 ">
            <button onClick={toggle}>
                <FavoriteIcon color={isToggle ? "secondary" : ""} />
            </button>
            <span>Đã thích</span>
        </div>
    );
};

export default Toggle;
