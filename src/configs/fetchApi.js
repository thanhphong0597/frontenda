export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const fakestoreApi = {
    getProductList: () => `https://localhost:7091/api/Products`,
    getCategory: () => `https://localhost:7091/api/Categories`,
};
