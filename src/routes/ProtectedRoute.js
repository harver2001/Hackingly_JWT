import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Providers/AuthProvider"

export const ProtectedRoute = () => {
    const { accessToken } = useAuth();
    
    if(!accessToken) {
        return <Navigate to="/login" />;
    }
    return <Outlet />
}