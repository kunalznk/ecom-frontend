import { RouteObject } from 'react-router-dom';
import Loader from '../components/Loader';
import App from "../App"
import Login from '../components/Login';
import Register from '../components/Register';
import NotFound from '../Pages/NotFound';
import UserProfile from '../Pages/Profile';
import ProductList from '../Pages/ProductList';
import ProductPage from '../Pages/ProductPage';

const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        loader: () => <Loader />,
        errorElement: <NotFound />,
        children: [
            {
                path: "signin",
                element: <Login />
            },
            {
                path: "signup",
                element: <Register />
            },
            {
                path: "user/me",
                element: <UserProfile />
            },
            {
                path: "products",
                element: <ProductList />

            },
            {
                path: "products/:productId",
                element: <ProductPage />
                
            }
        ]
    }
  ]
export default routes;