import { Button, Empty, Flex, Table, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteConfigItem, getConfigItems } from '../../api/configuration';
import { getUsers } from '../../api/account';
import { hasCreatePermission, hasEditingPermission } from '../../service/permissionService';
import { useAuth } from '../../context/AuthContext';

const Configurations = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const { user } = useAuth()

    const handleDelete = (id) => {
        deleteConfigItem(id)
            .then(() => {
                loadConfigItems()
            })
            .catch((err) => {
                console.error(err);
            })
    }

    const loadConfigItems = () => {
        getUsers()
            .then(users => {
                getConfigItems().then((res) => {
                    const formattedData = res.map((item) => ({
                        key: item.id,
                        id: item.id,
                        title: item.title,
                        createdDate: new Date(item.createdDate).toLocaleDateString(),
                        user: users[item.userId - 1],
                    }));
                    setData(formattedData);
                }).catch((error) => {
                    console.error('Error fetching configuration items:', error);
                });
            })
            .catch(console.error)
    }

    useEffect(() => {
        loadConfigItems()
    }, []);

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
                <>
                    <Button onClick={() => navigate(`/configurations/${record.id}`)}>
                        Ver Detalles
                    </Button>
                    <Button hidden={!hasEditingPermission(user)} onClick={() => handleDelete(record.id)}>
                        Borrar
                    </Button>
                </>
            ),
        }
    ];

    return (
        <div>
            <Flex justify='space-between' align='center'>
                <Typography.Title>Configuración</Typography.Title>
                <Button hidden={!hasCreatePermission(user)} onClick={() => navigate('/configurations/new')}>
                    + Agregar
                </Button>
            </Flex>
            <Table columns={columns} dataSource={data} pagination={false} locale={<Empty />} />
        </div>
    );
};

export default Configurations;