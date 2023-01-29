import { Alert, Box } from "@mui/material";
import ConfirmModal from "./components/ConfirmModal";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Loader from "./components/Loader";
import CartPage from "./Pages/CartPage";
import NotFound from "./Pages/NotFound";
import OderPage from "./Pages/OderPage";
import ProductList from "./Pages/ProductList";
import ProductPage from "./Pages/ProductPage";
import Alerts from './components/Alerts';
import Login from "./components/Login";
import Register from "./components/Register";
import { useAppSelector } from "./store/hooks";
import { Outlet, Route, Routes } from "react-router-dom";

function App() {

  const { loading , error } = useAppSelector((state) => state.entities.app);
  
  return (
    <Box sx={{flexGrow: 1, display:"flex" , flexDirection:"column",   justifyContent:"center" ,  alignItems:"center" ,minHeight:"100vh"}}>
      {Boolean(error.message) && <Alerts open={Boolean(error.message)} severity={error.severity} message={error.message}/>}
        {/* <Header /> */}
        {/* <Home /> */}
        {/* <ProductPage/> */}
        {/* <ProductList /> */}
        
        {/* <CartPage /> */}
        {/* <OderPage /> */}
        {/* <NotFound /> */}
        {/* <ConfirmModal /> */}
        {/* <Login /> */}
        {/* <Register /> */}
        {/* <Footer /> */}
        {/* {loading && <Loader />} */}
        <Outlet />
    </Box>
  );
}

export default App;
