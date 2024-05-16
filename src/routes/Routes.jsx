import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/root/Root';
import Home from '../pages/home/Home';
import ErrorPage from '../pages/error/ErrorPage';
import Login from '../pages/login/Login';
import Register from '../pages/resgistration/Register';
import AddVolunteerPost from '../pages/addVolunteerPost/AddVolunteerPost';
import PrivateRoutes from './PrivateRoutes';
import NeedVolunteer from '../pages/needVolunteer/NeedVolunteer';
import ViewPost from '../pages/viewPost/ViewPost';
import ApplyVolunteer from '../pages/apply/ApplyVolunteer';
import ManageMyPost from '../pages/manageMyPost/ManageMyPost';
import UpdatePost from '../pages/updatePost/UpdatePost';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('http://localhost:5001/addVolPost/All')
        
       
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
     
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path:"/add-volunteer-post",
        element:<PrivateRoutes><AddVolunteerPost></AddVolunteerPost> </PrivateRoutes>    
      },
      {
        path:"/needVolunteer",
        element:<NeedVolunteer></NeedVolunteer>,

      },
      {
        path:"/view-post-details/:id",
        element:<PrivateRoutes><ViewPost></ViewPost></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5001/addVolPost/All/${params.id}`)
      },

      {
        path:"/applyPost/:id",
        element:<PrivateRoutes><ApplyVolunteer></ApplyVolunteer></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5001/addVolPost/All/${params.id}`)
      },
      {
        path:"/managePost",
        element:<PrivateRoutes><ManageMyPost></ManageMyPost></PrivateRoutes>
      }, 
      {
        path:"/updatePost/:id",
        element:<PrivateRoutes><UpdatePost></UpdatePost></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5001/addVolPost/All/${params.id}`)
      }
   
    ]
  },
]);

export default router;