import { Button, Empty, Flex, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProblems } from "../../api/problem";

const Problems = () => {
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
            title: 'Usuario Asignado',
            dataIndex: 'assignedUser',
            key: 'assignedUser',
        },
        {
            title: 'Acciones',
            key: 'actions',
            render: (text, record) => (
                <Button onClick={() => navigate(`/problems/${record.id}`)}>
                    Ver Detalles
                </Button>
            ),
        }
    ];

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getProblems()
            .then((res) => {
                const formattedData = res.map((item) => ({
                    key: item.id,
                    id: item.id,
                    title: item.title,
                    createdDate: new Date(item.createdDate).toLocaleDateString(),
                    assignedUser: item.assignedUser.email,
                }));
                setData(formattedData);
            })
            .catch((error) => {
                console.error('Error fetching problems:', error);
            });
    }, [])

    return (
        <div>
            <Flex justify='space-between' align='center'>
                <Typography.Title>Problemas</Typography.Title>
                <Button onClick={() => navigate('/problems/new')}>
                    + Agregar
                </Button>
            </Flex>
            <Table columns={columns} dataSource={data} pagination={false} locale={<Empty />} />
        </div>
    );
};

export default Problems;