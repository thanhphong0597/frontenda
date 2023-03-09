import { ShoppingCart } from "@mui/icons-material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";
import slugify from "slugify";
import dataHeader from "../assets/data/header";
import { Logo } from "../components/logo";
import { useData } from "../configs/contextData";

export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const { categories, storageCarts } = useData();

    // React.useEffect(() => {
    //     if (searchValue) {
    //         const newProducts = products?.filter((i) =>
    //             i.name.includes(searchValue),
    //         );2
    //         setProducts(newProducts);
    //     }
    // }, [searchValue, products, setProducts]);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = "primary-search-account-menu";
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            <Link to={"/dashboard"}>
                <MenuItem onClick={handleMenuClose}>Dashboard</MenuItem>
            </Link>
        </Menu>
    );

    if (!categories) return;

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar className="sticky">
                <Box
                    component="div"
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        px: 2,
                        backgroundColor: "#F5F3E3",
                        color: "#212121",
                    }}
                >
                    <div className="flex items-center justify-center">
                        <Logo
                            src="/logo2.jpg"
                            width={50}
                            height={50}
                            className="mr-3 "
                        />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: "none", md: "flex" },
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".1rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            BÍ KIẾP LÀM GIÀU
                        </Typography>
                    </div>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            component="div"
                            sx={{
                                display: { xs: "none", sm: "flex" },
                            }}
                            className="px-5 space-x-10 font-semibold uppercase "
                        >
                            {/* {categories.length > 0 &&
                                categories.map((category) => (
                                    <Link
                                        key={category.id}
                                        to={`/products/categories/${category.name}`}
                                    >
                                        {category.name}
                                    </Link>
                                ))} */}
                            {dataHeader.length > 0 &&
                                dataHeader.map((item, index) => (
                                    <Link key={index} to={`/${slugify(item)}`}>
                                        {item}
                                    </Link>
                                ))}
                        </Typography>
                        <div className="flex items-center justify-end">
                            <Box sx={{ flexGrow: 1 }} />
                            <Box sx={{ display: { xs: "none", md: "flex" } }}>
                                <IconButton
                                    size="large"
                                    aria-label="show 4 new mails"
                                    color="inherit"
                                >
                                    <Link to={"/cart"}>
                                        <Badge
                                            badgeContent={storageCarts.length}
                                            color="error"
                                        >
                                            <ShoppingCart />
                                        </Badge>
                                    </Link>
                                </IconButton>
                                <IconButton
                                    size="large"
                                    aria-label="show 17 new notifications"
                                    color="inherit"
                                >
                                    <Badge badgeContent={null} color="error">
                                        <NotificationsIcon />
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    size="large"
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                            </Box>
                            <Box sx={{ display: { xs: "flex", md: "none" } }}>
                                <IconButton
                                    size="large"
                                    aria-label="show more"
                                    aria-haspopup="true"
                                    onClick={handleMobileMenuOpen}
                                    color="inherit"
                                >
                                    <MoreIcon />
                                </IconButton>
                            </Box>
                        </div>
                    </Box>
                </Box>
            </AppBar>
            {renderMenu}
        </Box>
    );
}
