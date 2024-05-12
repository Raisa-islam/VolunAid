import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import AuthProviders from './providers/AuthProviders';
import { ToastContainer } from 'react-toastify';
import router from './routes/Routes';







ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <HelmetProvider>
    <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>
  </HelmetProvider>
  
</React.StrictMode>
)
