import { useSnackbar } from 'notistack';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Alerts from './components/Alerts';
import { useAppSelector } from "./store/hooks";
import { Outlet, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";


function App() {
  
  const { loading , error } = useAppSelector((state) => state.entities.app);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    console.log(error)
      if(error.message) {
        enqueueSnackbar(error.message, {
          variant: error.severity
        });
      }
  }, [error, loading])
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
