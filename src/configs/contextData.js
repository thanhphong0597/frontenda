import useSWR from "swr";
import useLocalStorage from "../components/hooks/useLocalStorage";
import { fakestoreApi, fetcher } from "./fetchApi";

const { createContext, useState, useContext, useEffect } = require("react");

const ContextData = createContext();

const ProviderData = ({ children, ...props }) => {
    const [products, setProducts] = useState(null);
    const [categories, setCategories] = useState(null);
    const [storageCarts, setStorageCarts] = useLocalStorage("carts", []);
    const [token, setToken] = useLocalStorage("token", {});
    const [client, setClient] = useLocalStorage("client", {});
    const [createProduct, setCreateProduct] = useLocalStorage(
        "createProduct",
        [],
    );
    const [total, setTotal] = useState();

    const [user, setUsers] = useLocalStorage("user", {});

    //đổ dữ liệu khi load trang lan dau
    const { data: productList } = useSWR(
        fakestoreApi.getProductList(),
        fetcher,
    );
    const { data: categoryList } = useSWR(fakestoreApi.getCategory(), fetcher);

    //bắt đầu đổ dữ liệu
    useEffect(() => {
        //đổ product
        if (!productList) return;
        if (productList) {
            setProducts(productList);
        }
        //đổ cate
        if (categoryList) {
            setCategories(categoryList);
        }

        // đổ cart
        if (storageCarts) {
            const filter = storageCarts.reduce(
                (arr, item) => arr + item.price,
                0,
            );
            setTotal(filter);
        }
    }, [categoryList, productList, products, storageCarts]);

    //chuc nang cua cart
    const addToCart = (product) => {
        setStorageCarts((prev) => [...prev, product]);
    };
    const clearCart = () => {
        setStorageCarts([]);
    };

    const deleteCart = (id) => {
        setStorageCarts((prev) => {
            const newCartItem = storageCarts.filter((i) => i.id !== id);
            return newCartItem;
        });
    };

    //chức năng của client
    const addClient = (c) => {
        setClient(c);
    };
    //add Token
    const getToken = (c) => {
        setToken(c);
    };

    if (!products) return;
    if (!categories) return;

    const values = {
        storageCarts,
        products,
        categories,
        client,
        addToCart,
        addClient,
        total,
        deleteCart,
        createProduct,
        setCreateProduct,
        token,
        getToken,
        clearCart,
    };
    return (
        <ContextData.Provider value={values} {...props}>
            {children}
        </ContextData.Provider>
    );
};

const useData = () => {
    const context = useContext(ContextData);
    return context;
};

export { ProviderData, useData };
