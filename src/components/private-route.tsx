import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";

const PrivateRoute: React.FC = () => {
    const { user, loadingProfile: loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }

    return user ? <Outlet /> : <Navigate to="/auth/login" replace />;
};

export default PrivateRoute;