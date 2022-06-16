import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RequireAuth = (allowedRole) => {
	const { auth } = useAuth();
	const location = useLocation();
	const validRole = auth?.role == allowedRole.allowedRole;
	return (
		validRole
			? <Outlet />
			: auth?.email 
				? auth.role == 1
					? <Navigate to="/dashboard" state={{ from: location }} replace />
					: <Navigate to="/dashboard/items" state={{ from: location }} replace />

				: <Navigate to="/dashboard/login" state={{ from: location }} replace />
        
	);
}

export default RequireAuth;