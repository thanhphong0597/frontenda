import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";
import { jewelerys } from "../../assets/data/jewelery";
import { mens } from "../../assets/data/men";
import { womens } from "../../assets/data/women";
import { useToggle } from "../../components/hooks/useToggle";

const BannerCategory = ({ className = "" }) => {
    const [women, handleWomen] = useToggle();
    const [men, handleMen] = useToggle();
    const [jewelery, handleJewelery] = useToggle();

    return (
        <List
            sx={{
                padding: "20px",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                        fontWeight: "bold",
                        color: "black",
                        backgroundColor: "none",
                    }}
                >
                    Category:
                </Typography>
            }
            className={`${className}`}
        >
            <div className="thoi_trang_nu">
                <ListItemButton
                    onClick={handleWomen}
                    sx={{ display: "flex", gap: "20px" }}
                >
                    <ListItemText
                        primary="Thời trang nữ"
                        sx={{ ml: "20px", whiteSpace: "nowrap" }}
                    />
                    {women ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={women} timeout="auto" unmountOnExit>
                    <div className="flex flex-col gap-3">
                        {womens.map((women) => (
                            <Link
                                key={women.display}
                                to={women.slug}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    padding: "0 60px",
                                }}
                                className="font-light text-gray-400 focus-within:text-gray-900 focus-within:font-bold"
                            >
                                {women.display}
                            </Link>
                        ))}
                    </div>
                </Collapse>
            </div>
            <div className="thoi_trang_nam">
                <ListItemButton
                    onClick={handleMen}
                    sx={{ display: "flex", gap: "20px" }}
                >
                    <ListItemText
                        primary="Thời trang nam"
                        sx={{ ml: "20px", whiteSpace: "nowrap" }}
                    />
                    {men ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={men} timeout="auto" unmountOnExit>
                    <div className="flex flex-col gap-3">
                        {mens.map((men) => (
                            <Link
                                key={men.display}
                                to={men.slug}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    padding: "0 60px",
                                }}
                                className="font-light text-gray-400 focus-within:text-gray-900 focus-within:font-bold"
                            >
                                {men.display}
                            </Link>
                        ))}
                    </div>
                </Collapse>
            </div>

            <div className="trang_suc">
                <ListItemButton
                    onClick={handleJewelery}
                    sx={{ display: "flex", gap: "20px" }}
                >
                    <ListItemText
                        primary="Trang sức"
                        sx={{ ml: "20px", whiteSpace: "nowrap" }}
                    />
                    {jewelery ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={jewelery} timeout="auto" unmountOnExit>
                    <div className="flex flex-col gap-3">
                        {jewelerys.map((jewelery, index) => (
                            <Link
                                key={jewelery.display}
                                to={jewelery.slug}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    padding: "0 60px",
                                }}
                                className="font-light text-gray-400 focus-within:text-gray-900 focus-within:font-bold"
                            >
                                {jewelery.display}
                            </Link>
                        ))}
                    </div>
                </Collapse>
            </div>
        </List>
    );
};

export default BannerCategory;
