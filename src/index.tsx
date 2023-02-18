import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from './theme';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from './store';
import routes from './routes/index';
import axios from 'axios';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI3NTllMzJjLTQ0ZjctNDg1Ny1hZDA4LTk5MDRmZTBmYzBmZiIsImVtYWlsSWQiOiJrdW5hbHpua0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRybUlyeHBDWVdsL3NUU0dXZDg3ZTVlaGl1cFZqTVNNWUhreEpRendKUnF6Uy5IOFdjeFBGZSIsInBob25lTnVtYmVyIjoiNzAyMTQzNjA1NCIsInJvbGUiOiJDVVNUT01FUiIsIm90cCI6MzI1ODIxLCJleHBpcmVzQXQiOiIyMDIzLTAxLTI2VDE0OjAyOjU3LjAwMFoiLCJpc1ZlcmlmaWVkIjpmYWxzZSwiY3JlYXRlZEF0IjoiMjAyMy0wMS0yNlQxMzo1Mjo1Ny4wMDBaIiwidXBkYXRlZEF0IjoiMjAyMy0wMS0yNlQxMzo1Mjo1Ny4wMDBaIiwiaWF0IjoxNjc2NzA0MTQzLCJleHAiOjE2NzY3OTA1NDMsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCIsImlzcyI6ImxvY2FsaG9zdCJ9.LcQXgUK9EuxupqI5RX8KkMAwqPgA2gJC1Ipunfp89AA";
localStorage.setItem("token", token);

axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

// if(localStorage.getItem("token")) {
//   alert("")
//   axios.interceptors.request.use((request) => {
//     request.headers["Authorization"] = localStorage.getItem("token");
//     return request;
//   })
// }
const router = createBrowserRouter(routes)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
