import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const [auth, setAuth] = useState({ loading: true, isAuth: false });

    useEffect(() => {
        const checkAuth = () => {
            try {
                const cookies = document.cookie.split("; ");
                const hasAspNetCoreCookie = cookies.some((cookie) =>
                    cookie.startsWith(".AspNetCore.Cookies=")
                );

                if (hasAspNetCoreCookie) {
                    setAuth({ loading: false, isAuth: true });
                } else {
                    setAuth({ loading: false, isAuth: false });
                }
            } catch (error) {
                setAuth({ loading: false, isAuth: false });
            }
        };

        checkAuth();
    }, []);

    if (auth.loading) {
        return <p>Cargando...</p>;
    }

    return auth.isAuth ? children : <Navigate to="/login" replace />;
}
