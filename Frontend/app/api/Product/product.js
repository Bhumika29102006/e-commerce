import axios from "axios";

const API = "http://localhost:5000/api/products";

export const getProducts = async () => {
    const res = await axios.get(API);
    return res.data;
};

export const addProduct = async (product) => {
    const res = await axios.post(API, product);
    return res.data;
};