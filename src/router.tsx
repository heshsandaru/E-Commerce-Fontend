import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignUpPage";
import Layout from "./pages/Layout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {path: "/", element: <Login/>},
            {path: "/login", element: <Login/>},
            {path: "/signup", element: <Signup/>},
            {
                
            }
        ]
    }
])

export default router;