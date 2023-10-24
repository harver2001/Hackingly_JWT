import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../Providers/AuthProvider"
import { ProtectedRoute } from "./ProtectedRoute";
import LoginPage from "../pages/LoginPage/LoginPage";
import BlogPage from "../pages/BlogPage/BlogPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import LandingPage from "../pages/LandingPage/LandingPage";

const Routes = () => {
    const { token } = useAuth();
    const routesForAll = [
        {
            path : '/',
            element : <LandingPage />
        }, 
        {
            path: '/blog',
            element:<BlogPage />
        }
    ];
    
    const routesForAuthenticatedOnly = [
        {
            path: "/",
            element: <ProtectedRoute />,
            children: [
                {
                    path: "/",
                    element: <div>User home page</div>
                },
                {
                    path: "/profile",
                    element: <div>User profile page</div>
                },
                {
                    path: "/example",
                    element: <div>Sample page that requires authentication</div>
                },
            ]
        }
    ];
    
    const routesForNotAuthenticatedOnly = [    
        {
            path: '/login',
            element:<LoginPage />
        },
        {
            path: '/signup',
            element:<SignupPage />
        },
    ];

    const router = createBrowserRouter([
        ...routesForAll,
        ...(!token ? routesForNotAuthenticatedOnly : []),
        ...routesForAuthenticatedOnly,   
    ]);

    return <RouterProvider router = {router} />
}

export default Routes;