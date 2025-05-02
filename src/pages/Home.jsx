import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const navigate = useNavigate();
  const { user, loading, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  if (loading) return <p>Cargando...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Inicio</h2>
      <p>Bienvenido, {user.email} </p>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}