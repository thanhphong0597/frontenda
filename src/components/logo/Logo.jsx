import { Avatar } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const Logo = ({
    width = "",
    height = "",
    src = "",
    to = "",
    alt = "",
    title = "",
    className = "",
    ...props
}) => {
    return (
        <Link to={to} {...props} className={`${className}`}>
            <Avatar
                sx={{
                    width: width,
                    height: height,
                }}
                src={src}
                alt={alt}
            />
            <span className={` hidden lg:inline-block`}>{title}</span>
        </Link>
    );
};

Logo.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    src: PropTypes.string,
    to: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
};

export default Logo;
