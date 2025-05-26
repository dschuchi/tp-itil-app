import { Button, Empty, Flex, Table, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getConfigItems } from '../../api/configuration';

const Configurations = () => {
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
        {
            title: 'Acciones',
            key: 'actions',
            render: (text, record) => (
                <Button onClick={() => navigate(`/configurations/${record.id}`, { state: record })}>
                    Ver Detalles
                </Button>
            ),
        }
    ];

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getConfigItems().then((res) => {
            const formattedData = res.map((item) => ({
                key: item.id,
                id: item.id,
                title: item.title,
                createdDate: new Date(item.createdDate).toLocaleDateString(),
                user: item.user,
            }));
            setData(formattedData);
        }).catch((error) => {
            console.error('Error fetching configuration items:', error);
        });
    }, []);

    return (
        <div>
            <Flex justify='space-between' align='center'>
                <Typography.Title>Configuración</Typography.Title>
                <Button onClick={() => navigate('/configurations/new')}>
                    + Agregar
                </Button>
            </Flex>
            <Table columns={columns} dataSource={data} pagination={false} locale={<Empty />} />
        </div>
    );
};

export default Configurations;