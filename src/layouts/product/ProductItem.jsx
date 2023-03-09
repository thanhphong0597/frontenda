import {
    Card,
    CardActionArea,
    CardContent,
    Stack,
    Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product: { id, name, price } }) => {
    return (
        <Card
            sx={{
                backgroundColor: "#F5F3E3",
            }}
        >
            <CardActionArea>
                <Link
                    to={`/${name}/${id}`}
                    className="block mb-3 overflow-hidden"
                >
                    <img
                        src={`/images/img${id}.jpg`}
                        alt={name}
                        className="object-cover h-auto max-w-full align-middle border-none"
                        loading="lazy"
                    />
                </Link>

                <CardContent>
                    <Stack direction="row">
                        <Typography
                            gutterBottom
                            component="h1"
                            variant="h6"
                            sx={{
                                fontWeight: "bold",
                            }}
                            className="text-xs text-dark"
                        >
                            {price.toLocaleString("vi-VN", {
                                currency: "VND",
                            })}
                        </Typography>
                        <Typography>₫</Typography>
                    </Stack>

                    <Link to={`/${name}/${id}`}>
                        <Typography
                            component="span"
                            sx={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                            className="text-xs font-light text-gray-400 hover:text-gray-900 hover:font-bold"
                        >
                            {name}
                        </Typography>
                    </Link>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ProductItem;
