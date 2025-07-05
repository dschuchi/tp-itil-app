import { Button, Empty, Flex, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteIncident, getIncidents } from "../../api/incident";
import { getUsers } from "../../api/account";
import { useAuth } from "../../context/AuthContext";
import { hasCreatePermission, hasEditingPermission } from "../../service/permissionService";

const Incidents = () => {

    const handleDelete = (idIncident) => {
        deleteIncident(idIncident)
            .then(loadIncidents)
            .catch(console.error)
    }

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
            title: 'Ultima actualización',
            dataIndex: 'lastUpdated',
            key: 'lastUpdated',
        },
        {
            title: 'Usuario asignado',
            dataIndex: 'assignedUserId',
            key: 'assignedUserId',
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
                    <Button onClick={() => navigate(`/incidents/${record.id}`)}>
                        Ver Detalles
                    </Button>
                    <Button hidden={!hasEditingPermission(user)} onClick={() => handleDelete(record.id)}>
                        Borrar
                    </Button>
                </>
            ),
        }
    ];

    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const { user } = useAuth()

    const loadIncidents = () => {
        getUsers()
            .then(users => {
                getIncidents()
                    .then((res) => {
                        const formattedData = res.map((item) => ({
                            key: item.id,
                            id: item.id,
                            title: item.title,
                            createdDate: new Date(item.createdDate).toLocaleDateString(),
                            assignedUserId: users[item.assignedUserId],
                            status: item.state,
                            lastUpdated: new Date(item.lastUpdated).toLocaleDateString(),
                        }));
                        setData(formattedData);
                    })
                    .catch((error) => {
                        console.error('Error fetching incidents:', error);
                    });
            })
            .catch(console.error)
            .finally(()=>{setLoading(false)})
    }

    useEffect(() => {
        loadIncidents()
    }, []);

    const [loading, setLoading] = useState(true);

    return (
        <div>
            <Flex justify='space-between' align='center'>
                <Typography.Title>Incidentes</Typography.Title>
                <Button hidden={!hasCreatePermission(user)} onClick={() => navigate('/incidents/new')}>
                    + Agregar
                </Button>
            </Flex>
            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                locale={<Empty />}
                loading={loading}
            />
        </div>
    );
};

export default Incidents;