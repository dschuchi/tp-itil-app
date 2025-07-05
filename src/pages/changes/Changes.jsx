import { Button, Empty, Flex, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteChange, getChanges } from "../../api/change";
import { useAuth } from "../../context/AuthContext";
import { hasCreatePermission, hasEditingPermission } from "../../service/permissionService";

const Changes = () => {
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
            title: 'Fecha programada',
            dataIndex: 'scheduledDate',
            key: 'scheduledDate',
        },
        {
            title: 'Usuario asignado',
            dataIndex: 'assignedUser',
            key: 'assignedUser',
        },
        {
            title: 'Estado',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Acciones',
            key: 'actions',
            render: (text, record) => (
                <>
                    <Button onClick={() => navigate(`/changes/${record.id}`)}>
                        Ver Detalles
                    </Button>
                    <Button hidden={!hasEditingPermission(user)} onClick={() => handleDelete(record.id)}>
                        Borrar
                    </Button>
                </>
            ),
        }
    ];

    const handleDelete = (id) => {
        deleteChange(id)
            .then(loadChanges)
            .catch(console.error)
    }

    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const { user } = useAuth()

    const loadChanges = () => {
        getChanges()
            .then((res) => {
                const formattedData = res.map((item) => ({
                    key: item.id,
                    id: item.id,
                    title: item.title,
                    createdDate: new Date(item.createdDate).toLocaleDateString(),
                    assignedUser: item.assignedUser.email,
                    status: item.state,
                    scheduledDate: new Date(item.scheduledDate).toLocaleDateString()
                }));
                setData(formattedData);
            })
            .catch(console.error)
            .finally(() => { setLoading(false) })
    }

    useEffect(() => {
        loadChanges()
    }, [])

    const [loading, setLoading] = useState(true);

    return (
        <div>
            <Flex justify='space-between' align='center'>
                <Typography.Title>Cambios</Typography.Title>
                <Button hidden={!hasCreatePermission(user)} onClick={() => navigate('/changes/new')}>
                    + Agregar
                </Button>
            </Flex>
            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                loading={loading}
                locale={<Empty />}
            />
        </div>
    );
};

export default Changes;