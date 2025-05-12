import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Card, Col, Row, Typography } from "antd";

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
      <Typography.Title>Panel</Typography.Title>

      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Card title="Grafico 1">
            <img
              src="dashboard-placeholder.jpg"
              alt="Dashboard"
              style={{ width: "100%", filter: "blur(2px)" }}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Grafico 2">
            <img
              src="dashboard-placeholder.jpg"
              alt="Dashboard"
              style={{ width: "100%", filter: "blur(2px)" }}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Grafico 3">
            <img
              src="dashboard-placeholder.jpg"
              alt="Dashboard"
              style={{ width: "100%", filter: "blur(2px)" }}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Grafico 4">
            <img
              src="dashboard-placeholder.jpg"
              alt="Dashboard"
              style={{ width: "100%", filter: "blur(2px)" }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}