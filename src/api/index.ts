/* auth API  */

const loginApi = "http://localhost:3005/api/signin";
const registerApi = "http://localhost:3005/api/signup";

/* user API  */

const getUserApi = "http://localhost:3006/api/user";
const updateUserApi = "http://localhost:3006/api/user";
const deleteUserApi = "http://localhost:3006/api/user";

/* product api  */

const getProductsApi = "http://localhost:3007/api/products";
const getProductByIdApi = "http://localhost:3007/api/products";
const getFilterProductsApi = "http://localhost:3007/api/products";

/* order Api */

const addToCartApi = "http://localhost:3008/api/orders/cart";
const getCartApi = "http://localhost:3008/api/orders/cart/latest";
const deleteFromCartApi  = "http://localhost:3008/api/orders/cart";

const createOrderApi = "http://localhost:3008/api/orders";
const getOrdersApi = "http://localhost:3008/api/orders";


/* Payment Api */

const paymentSuccessApi = "http://localhost:3009/api/payment/success"
const paymentFailApi = "http://localhost:3009/api/payment/fail"


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
    getOrdersApi,
    paymentSuccessApi,
    paymentFailApi

}

/*
{
    "key": "rzp_test_3zLfhVTATR8IG7",
    "amount": 20529,
    "currency": "INR",
    "order_id": "order_LKxChIQpsV1yzs",
    "prefill": {
        "name": "undefined undefined",
        "email": "kunalznk@gmail.com",
        "contact": "7021436054"
    },
    "notes": {},
    "theme": {
        "color": "#3399cc"
    },
    "modal": {
        "confirm_close": true,
        "animation": true
    },
    "retry": {
        "enabled": true,
        "max_count": 4
    },
    "timeout": 300
}

*/