import { Button, Empty, Flex, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getIncidents } from "../api/incident";

const Incidents = () => {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Título',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Fecha de creación',
            dataIndex: 'createdDate',
            key: 'createdDate',
        },
        {
            title: 'Usuario',
            dataIndex: 'user',
            key: 'user',
        },
    ];

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getIncidents()
            .then((res) => {
                const formattedData = res.map((item) => ({
                    key: item.id,
                    id: item.id,
                    title: item.title,
                    createdDate: new Date(item.createdDate).toLocaleDateString(),
                    user: item.user,
                }));
                setData(formattedData);
            })
            .catch((error) => {
                console.error('Error fetching incidents:', error);
            });
    }, []);

    return (
        <div>
            <Flex justify='space-between' align='center'>
                <Typography.Title>Incidentes</Typography.Title>
                <Button onClick={() => navigate('/incidents/new')}>
                    + Agregar
                </Button>
            </Flex>
            <Table columns={columns} dataSource={data} pagination={false} locale={<Empty />} />
        </div>
    );
};

export default Incidents;