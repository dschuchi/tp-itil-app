import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../api/account";

export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(false);
    };
    fetchUser();
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Inicio</h2>
      <p>Bienvenido, {user}</p>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}