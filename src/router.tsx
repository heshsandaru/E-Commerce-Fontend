import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Home Page</div>,
        children: [
            {path: "/", element: <Login/>},
            {path: "/login", element: <Login/>},
            {path: "/signup", element: <Signup/>},
            {
                
            }
        ]
    }
])