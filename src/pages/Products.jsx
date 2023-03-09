import React from "react";
import { useParams } from "react-router-dom";
import { Autoplay, Keyboard, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import bannerData from "../assets/data/bannerData";
import Document from "../components/title/Document";
import BannerCategory from "../layouts/banner/BannerCategory";
import BannerHome from "../layouts/banner/BannerHome";
import Categories from "../layouts/categories/Categories";
import ProductList from "../layouts/product/ProductList";

const Products = () => {
    const { category } = useParams();

    return (
        <div className="bg-[#F5F3E3]">
            <Document title="Sản phẩm" />
            <div className="container py-10 my-10">
                <Swiper
                    cssMode={true}
                    mousewheel={true}
                    keyboard={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    modules={[Mousewheel, Keyboard, Autoplay]}
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
            <div className="">
                <div className="grid grid-cols-300">
                    <BannerCategory />
                    {category === undefined ? (
                        <ProductList slideStart={10} slideEnd={23} />
                    ) : (
                        <Categories />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Products;
