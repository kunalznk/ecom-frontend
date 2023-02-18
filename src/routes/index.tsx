import { RouteObject } from 'react-router-dom';
import Loader from '../components/Loader';
import App from "../App"
import Login from '../components/Login';
import Register from '../components/Register';
import NotFound from '../Pages/NotFound';
import MyAccount from '../Pages/MyAccount';
import ProductList from '../Pages/ProductList';
import ProductPage from '../Pages/ProductPage';
import Home from '../components/Home';
import CartPage from '../Pages/CartPage';
import Test from '../Pages/Test';
import OrderPage from '../Pages/OrderPage';

const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        loader: () => <Loader />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                index: true,
                element: <Home />
            },
            {
                path: "test",
                element: <Test />
            },
            {
                path: "signin",
                element: <Login />
            },
            {
                path: "signup",
                element: <Register />
            },
            {
                path: "account",
                element: <MyAccount />
            },
            {
                path: "cart",
                element: <CartPage />
            },
            {
                path: "products",
                element: <ProductList />

            },
            {
                path: "products/:productId",
                element: <ProductPage />
                
            },
            {
                path: "cart",
                element: <CartPage />
                
            },
            {
                path: "orders",
                element: <OrderPage />
                
            }
        ]
    }
  ]
export default routes;