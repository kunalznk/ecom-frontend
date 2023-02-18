/* auth API  */

const loginApi = "http://localhost:4000/api/signin";
const registerApi = "http://localhost:4000/api/signup";

/* user API  */

const getUserApi = "http://localhost:5000/api/user";
const updateUserApi = "http://localhost:5000/api/user";
const deleteUserApi = "http://localhost:5000/api/user";

/* product api  */

const getProductsApi = "http://localhost:3003/api/products";
const getProductByIdApi = "http://localhost:3003/api/products";
const getFilterProductsApi = "http://localhost:3003/api/products";

/* order Api */

const addToCartApi = "http://localhost:3004/api/orders/cart";
const getCartApi = "http://localhost:3004/api/orders/cart";
const deleteFromCartApi  = "http://localhost:3004/api/orders/cart";

const createOrderApi = "http://localhost:3004/api/orders";
const getOrdersApi = "http://localhost:3004/api/orders";

export default {
    loginApi,
    registerApi,
    getUserApi,
    updateUserApi,
    deleteUserApi,
    getProductsApi,
    getProductByIdApi,
    getFilterProductsApi,
    getCartApi,
    addToCartApi,
    deleteFromCartApi,
    createOrderApi,
    getOrdersApi

}