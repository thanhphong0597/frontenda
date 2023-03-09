import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useData } from "../../configs/contextData";

export default function Review() {
    const { storageCarts, total } = useData();

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Đơn hàng đã đặt
            </Typography>
            <List disablePadding>
                {storageCarts.map((product, index) => (
                    <ListItem key={index} sx={{ py: 1, px: 0 }}>
                        <ListItemText
                            primary={product.name}
                            secondary={product.description}
                        />
                        <Typography variant="body2">
                            {product.price.toLocaleString("vi-VN", {
                                style: "currency",
                                currency: "VND",
                            })}
                        </Typography>
                    </ListItem>
                ))}

                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {total.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                        })}
                    </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Shipping
                    </Typography>
                    <Typography gutterBottom>ten user</Typography>
                    <Typography gutterBottom>thong tin dia chi</Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
