import { useEffect, useState } from 'react';
import { Row, Col, Card, Statistic, Spin, Button, Segmented } from 'antd';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
import { getIncidentsMetrics } from '../../api/metrics';

const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

const segmentedOptions = [
    {
        label: '30 días',
        value: 30
    },
    {
        label: '7 días',
        value: 7

    },
    {
        label: '365 días',
        value: 365

    }]

const IncidentCharts = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [days, setDays] = useState(30);

    useEffect(() => {
        getIncidentsMetrics(days)
            .then(json => {
                setData(json);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error al cargar los datos', err);
                setLoading(false);
            });
    }, [days]);

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
            <Segmented
                size='large'
                options={segmentedOptions}
                value={days}
                onChange={setDays}
            />
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
