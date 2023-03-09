import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function AddressForm({ register, errors }) {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Địa Chỉ Giao Hàng
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Họ"
                        fullWidth
                        variant="standard"
                        {...register("firstName", {
                            required:
                                "bỏ ăn, bỏ uống chứ đừng quên không điền họ",
                        })}
                    />
                    {errors.ho && (
                        <div className="mt-5 text-sm text-red-500">
                            {errors.ho.message}
                        </div>
                    )}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Tên"
                        fullWidth
                        variant="standard"
                        {...register("lastName", {
                            required:
                                "bỏ ăn, bỏ uống chứ đừng quên không điền tên  ",
                        })}
                    />
                    {errors.ten && (
                        <div className="mt-5 text-sm text-red-500">
                            {errors.ten.message}
                        </div>
                    )}
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Địa chỉ"
                        fullWidth
                        variant="standard"
                        {...register("address", {
                            required:
                                "bỏ ăn, bỏ uống chứ đừng quên không điền địa chỉ",
                        })}
                    />
                    {errors.diachi && (
                        <div className="mt-5 text-sm text-red-500">
                            {errors.diachi.message}
                        </div>
                    )}
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Số điện thoại"
                        type="tel"
                        fullWidth
                        variant="standard"
                        {...register("phoneNumber", {
                            required:
                                "bỏ ăn, bỏ uống chứ đừng quên không điền phone ",
                        })}
                    />
                    {errors.phone && (
                        <div className="mt-5 text-sm text-red-500">
                            {errors.phone.message}
                        </div>
                    )}
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
