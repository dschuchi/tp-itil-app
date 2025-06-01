import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Card, Col, Row, Typography } from "antd";
import IncidentCharts from "../components/metrics/IncidentCharts";

export default function Home() {
  const navigate = useNavigate();
  const { user, loading, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  if (loading) return <p>Cargando...</p>;

  return (
    <div>
      <Typography.Title>Panel</Typography.Title>

      <IncidentCharts />
    </div>
  );
}