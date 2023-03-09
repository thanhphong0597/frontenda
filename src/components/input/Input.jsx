import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
} from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { useController } from "react-hook-form";

const Input = ({ name, label, control, togglePassword, ...props }) => {
    const [values, setValues] = React.useState({
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const { field } = useController({
        name,
        control,
        defaultValue: "",
    });

    if (togglePassword)
        return (
            <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                    Mật khẩu
                </InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {values.showPassword ? (
                                    <VisibilityOff />
                                ) : (
                                    <Visibility />
                                )}
                            </IconButton>
                        </InputAdornment>
                    }
                    autoFocus
                    label={label}
                    name={name}
                    {...field}
                    {...props}
                />
            </FormControl>
        );
    return (
        <TextField
            name={name}
            fullWidth
            label={label}
            autoFocus
            {...field}
            {...props}
        />
    );
};

Input.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
};

export default Input;
