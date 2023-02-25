/* auth API  */

const loginApi = "http://localhost:3005/api/signin";
const registerApi = "http://localhost:3005/api/signup";

/* user API  */

const getUserApi = "http://localhost:3008/api/user";
const updateUserApi = "http://localhost:3008/api/user";
const deleteUserApi = "http://localhost:3008/api/user";

/* product api  */

const getProductsApi = "http://localhost:3006/api/products";
const getProductByIdApi = "http://localhost:3006/api/products";
const getFilterProductsApi = "http://localhost:3006/api/products";

/* order Api */

const addToCartApi = "http://localhost:3007/api/orders/cart";
const getCartApi = "http://localhost:3007/api/orders/cart";
const deleteFromCartApi  = "http://localhost:3007/api/orders/cart";

const createOrderApi = "http://localhost:3007/api/orders";
const getOrdersApi = "http://localhost:3007/api/orders";


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