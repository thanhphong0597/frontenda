import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-800">
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex">
                    <div className="w-full lg:w-1/4 ">
                        <h3 className="text-2xl font-bold text-white">Shop</h3>
                        <ul className="mt-6">
                            <li className="hover:text-gray-400">
                                <a href="@">About us</a>
                            </li>
                            <li className="hover:text-gray-400">
                                <a href="@">Services</a>
                            </li>
                            <li className="hover:text-gray-400">
                                <a href="@">Testimonials</a>
                            </li>
                            <li className="hover:text-gray-400">
                                <a href="@">Contact us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-1/4 lg:ml-12">
                        <h3 className="text-2xl font-bold text-white">Blog</h3>
                        <ul className="mt-6">
                            <li className="hover:text-gray-400">
                                <a href="@">SEO</a>
                            </li>
                            <li className="hover:text-gray-400">
                                <a href="@">Social media</a>
                            </li>
                            <li className="hover:text-gray-400">
                                <a href="@">Email marketing</a>
                            </li>
                            <li className="hover:text-gray-400">
                                <a href="@">Web development</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-1/4 lg:ml-12">
                        <h3 className="text-2xl font-bold text-white">
                            Subscribe
                        </h3>
                        <p className="mt-6 text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Mauris vel sapien aliquet, volutpat ex at,
                            consequat turpis.
                        </p>
                        <form className="mt-8">
                            <div className="flex flex-wrap">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full px-4 py-2 mr-2 text-gray-900 bg-white rounded-lg focus:outline-none focus:shadow-outline lg:w-auto"
                                />
                                <button className="w-full px-4 py-2 mt-4 font-bold text-white bg-gray-900 rounded-lg hover:bg-gray-700 focus:outline-none focus:shadow-outline lg:w-auto lg:mt-0">
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="w-full lg:w-1/4 lg:ml-12">
                        <h3 className="text-2xl font-bold text-white">
                            Follow us
                        </h3>
                        <ul className="mt-6">
                            <li className="hover:text-gray-400">
                                <a href="@">
                                    <FaFacebook className="inline-block w-6 h-6 mr-2" />
                                    Facebook
                                </a>
                            </li>
                            <li className="hover:text-gray-400">
                                <a href="@">
                                    <FaTwitter className="inline-block w-6 h-6 mr-2" />
                                    Twitter
                                </a>
                            </li>
                            <li className="hover:text-gray-400">
                                <a href="@">
                                    <FaInstagram className="inline-block w-6 h-6 mr-2" />
                                    Instagram
                                </a>
                            </li>
                            <li className="hover:text-gray-400">
                                <a href="@">
                                    <FaYoutube className="inline-block w-6 h-6 mr-2" />
                                    Youtube
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="h-px my-6 bg-gray-700 border-none" />
                <div className="flex flex-col items-center justify-between pt-4 lg:flex-row">
                    <p className="text-sm text-gray-400">
                        © 2023 Company. All rights reserved.
                    </p>
                    <div className="flex mt-4 lg:mt-0">
                        <a
                            href="@"
                            className="text-gray-400 hover:text-gray-300"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M9 3.001H3v18h6V3.001zM21 8.999c0-1.103-.898-2-2-2h-2v-2h2c1.103 0 2-.897 2-2s-.897-2-2-2h-2v-2c0-1.103-.898-2-2-2s-2 .897-2 2v2h-2v-2c0-1.103-.898-2-2-2s-2 .897-2 2v2h-2c-1.103 0-2 .897-2 2s.897 2 2 2h2v2h-2c-1.103 0-2 .897-2 2s.897 2 2 2h2v2h-2c-1.103 0-2 .898-2 2s.897 2 2 2h2v2h2v-2c0-1.103.898-2 2-2s2 .897 2 2v2h2v-2c0-1.103.898-2 2-2s2 .897 2 2v-2h2c1.102 0 2-.898 2-2s-.898-2-2-2h-2v-2h2c1.102 0 2-.898 2-2z"
                                ></path>
                            </svg>
                        </a>
                        <a
                            href="@"
                            className="ml-6 text-gray-400 hover:text-gray-300"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                className="w-5 h-5 fill-current"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13.712 3.001H10.29c-3.225 0-5.858 2.634-5.858 5.858v3.422H3.999a.999.999 0 00-.999.999v6.344c0 .551.448.999.999.999h3.433v6.344c0 .551.448.999.999.999h6.344a.999.999 0 00.999-.999v-6.344h3.433a.999.999 0 00.999-.999v-3.422c0-1.858.69-3.582 1.838-4.892-.464.13-.947.199-1.446.199h-1.288V8.859c0-1.058.862-1.92 1.92-1.92h2.422c1.058 0 1.92.862 1.92 1.92v2.422h-1.288c-.499 0-.982-.069-1.446-.199 1.148 1.31 1.838 3.034 1.838 4.892v2.054h2.433a.999.999 0 00.999-.999v-6.344a.999.999 0 00-.999-.999zM8.29 8.859c0-2.441 1.984-4.425 4.425-4.425h3.422v3.422H12.72c-1.058 0-1.92.862-1.92 1.92v2.422h-1.288a4.421 4.421 0 01-4.424-4.419zM19 13.714a.999.999 0 100 1.999.999.999 0 000-1.999z"
                                />
                            </svg>
                        </a>
                        <a
                            href="@"
                            className="ml-6 text-gray-400 hover:text-gray-300"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.109 6.354a6.205 6.205 0 019.465 0 6.2 6.2 0 01.003 8.773l-4.732 4.731a1.168 1.168 0 01-.826.341 1.168 1.168 0 01-.826-.341l-4.731-4.731a6.2 6.2 0 01-.003-8.773zM8.45 8.697a3.798 3.798 0 015.662 0 3.758 3.758 0 011.056 2.651 3.755 3.755 0 01-1.056 2.652l-2.34 2.34a1.166 1.166 0 01-.826.341 1.166 1.166 0 01-.826-.341l-2.34-2.34a3.758 3.758 0 01-1.056-2.652 3.758 3.758 0 011.056-2.651z"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
