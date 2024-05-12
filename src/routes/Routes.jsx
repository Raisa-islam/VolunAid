import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/root/Root';
import Home from '../pages/home/Home';
import ErrorPage from '../pages/error/ErrorPage';
import Login from '../pages/login/Login';
import Register from '../pages/resgistration/Register';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
       
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
     
      {
        path: "/register",
        element: <Register></Register>,
      },
   
    ]
  },
]);

export default router;