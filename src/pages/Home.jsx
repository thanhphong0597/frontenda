import { Typography } from "@mui/material";
import { Button } from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import bannerData from "../assets/data/bannerData";
import Document from "../components/title/Document";
import { useData } from "../configs/contextData";
import BannerHome from "../layouts/banner/BannerHome";
import ProductItem from "../layouts/product/ProductItem";
import ProductList from "../layouts/product/ProductList";
const Home = () => {
    const { products } = useData();

    return (
        <div className="mt-[74px] bg-kem">
            <Document title="Bí kiếp làm giàu - Trang chủ" />
            <div className="h-screen max-w-full">
                <Swiper
                    cssMode={true}
                    navigation={true}
                    mousewheel={true}
                    keyboard={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
                    className="mySwiper"
                >
                    {bannerData.length > 0 &&
                        bannerData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <BannerHome item={item} />
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
            <div className="py-5">
                <div className="container flex flex-col items-center">
                    <div className="text-center">
                        <Typography variant="h3" component="div">
                            Một số sản phẩm mới ra mắt
                        </Typography>
                    </div>
                    <div className="container px-4 py-8 mx-auto">
                        <ProductList slideStart={7} slideEnd={18} />
                    </div>
                    <Link to={`/san-pham`}>
                        <Button
                            size="xl"
                            bordered
                            color="black"
                            rounded={false}
                        >
                            Xem thêm
                        </Button>
                    </Link>
                </div>
                <div className="container px-4 py-8 mt-10 border-t border-[#e3ddbb]">
                    <h1 className="mb-10 text-3xl font-semibold text-center uppercase">
                        sản phẩm nổi bật
                    </h1>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        {products.slice(1, 8).map((product) => (
                            <SwiperSlide key={product.id}>
                                <ProductItem product={product}></ProductItem>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Home;
