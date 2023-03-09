import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
    return (
        <Card
            sx={{
                backgroundColor: "#F5F3E3",
            }}
        >
            <CardActionArea>
                <Link
                    to={`/${category.name}/${category.id}`}
                    className="block mb-3 overflow-hidden"
                >
                    <img
                        src={`/images/img${category.id}.jpg`}
                        alt={category.name}
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
                            {category.price.toLocaleString("vi-VN", {
                                currency: "VND",
                            })}
                        </Typography>
                        <Typography>₫</Typography>
                    </Stack>

                    <Link to={`/${category.name}/${category.id}`}>
                        <Typography
                            component="span"
                            sx={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                            className="text-xs font-light text-gray-400 hover:text-gray-900 hover:font-bold"
                        >
                            {category.name}
                        </Typography>
                    </Link>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default Category;
