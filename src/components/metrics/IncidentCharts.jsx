import { useEffect, useState } from 'react';
import { Row, Col, Card, Statistic, Spin } from 'antd';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
import { getIncidentsMetrics } from '../../api/metrics';

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const IncidentCharts = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getIncidentsMetrics()
            .then(json => {
                setData(json);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error al cargar los datos', err);
                setLoading(false);
            });
    }, []);

    if (loading) return <Spin />;
    if (!data) return <div>Error al cargar los datos.</div>;

    const incidentsByDay = data.incidentsPerDay.map((count, index) => ({
        day: daysOfWeek[index],
        incidents: count,
    }));

    const incidentsByHour = data.incidentsPerHour.map((count, hour) => ({
        hour: `${hour}:00`,
        incidents: count,
    }));

    return (
        <div style={{ padding: 24 }}>
            <Row gutter={[16, 16]}>
                <Col span={8}>
                    <Card>
                        <Statistic title="Día con más incidentes" value={data.dayWithMostIncidents} />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card>
                        <Statistic title="Hora con más incidentes" value={`${data.hourWithMostIncidents}:00`} />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card>
                        <Statistic title="Tiempo promedio de resolución" value={data.avgResolutionTime.split('.')[0]} />
                    </Card>
                </Col>
            </Row>

            <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
                <Col span={24} md={12}>
                    <Card title="Incidentes por día">
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={incidentsByDay}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="day" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="incidents" fill="#1890ff" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>

                <Col span={24} md={12}>
                    <Card title="Incidentes por hora">
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={incidentsByHour}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="hour" interval={2} />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="incidents" fill="#52c41a" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default IncidentCharts;
