import { RouteObject } from 'react-router-dom';
import Loader from '../components/Loader';
import App from "../App"
import Login from '../components/Login';
import Register from '../components/Register';
import NotFound from '../Pages/NotFound';

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
            }
        ]
    }
  ]
export default routes;