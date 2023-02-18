import { Alert, Box, Grid } from "@mui/material";
import ConfirmModal from "./components/ConfirmModal";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Loader from "./components/Loader";
import CartPage from "./Pages/CartPage";
import NotFound from "./Pages/NotFound";
import OderPage from "./Pages/OrderPage";
import ProductList from "./Pages/ProductList";
import ProductPage from "./Pages/ProductPage";
import Alerts from './components/Alerts';
import Login from "./components/Login";
import Register from "./components/Register";
import { useAppSelector } from "./store/hooks";
import { Outlet, Route, Routes } from "react-router-dom";
import UserProfile from "./Pages/MyAccount";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect, useState } from "react";
import EmptyCart from "./components/EmptyCart";
import EmptySearch from './components/EmptySearch';
import EmptyWishlist from "./components/EmptyWishlist";
import About from "./components/About";
import Checkout from "./components/Checkout";
import OrderPage from "./Pages/OrderPage";
import Text from "./components/Test";

function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  const { loading , error } = useAppSelector((state) => state.entities.app);
  return (
   <div style={{backgroundColor:"#ffffffc4"}}>
   <Header />
   {/* <Home /> */}
   {/* <Home />
   <EmptyCart />
   <EmptySearch />
   <EmptyWishlist />
   <NotFound />
   <About />
   <CartPage />
   <Checkout />
   <OrderPage />
   <UserProfile />
   <ProductPage />
   <ProductList />
   <Register />
   <Login />
   <ProductPage /> */}
   <Outlet />
  
   <Footer />
   </div>
  );
}

export default App;
