import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

const Field = ({ xs, children, ...props }) => {
    return (
        <Grid xs={xs} {...props}>
            {children}
        </Grid>
    );
};

Field.propTypes = {
    xs: PropTypes.number,
};

export default Field;
