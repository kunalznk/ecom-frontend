import { useSnackbar } from 'notistack';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Alerts from './components/Alerts';
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { Outlet, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCurrentUserThunk } from './store/userSlice';
import { fetchFilterProducts } from './store/productSlice';


function App() {
  
  const dispatch = useAppDispatch();
  const { app: { loading , error }, product: {filters} } = useAppSelector((state) => state.entities);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
      if(error.message) {
        enqueueSnackbar(error.message, {
          variant: error.severity,
          anchorOrigin: {horizontal: "right" , vertical:"top"}
        });
      }
  }, [error, loading])

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token) {
      dispatch(getCurrentUserThunk());
      dispatch(fetchFilterProducts(filters))
    }
}, [])
  return (
   <div style={{backgroundColor:"#ffffffc4"}}>
    {loading && <Loader />}
   <Header />
    <Alerts />
   <Outlet />
   <Footer />
   </div>
  );
}

export default App;
