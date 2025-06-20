import { Button, Empty, Flex, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteProblem, getProblems } from "../../api/problem";
import { useAuth } from "../../context/AuthContext";
import { hasCreatePermission, hasEditingPermission } from "../../service/permissionService";

const Problems = () => {
    const handleDelete = (idProblem) => {
        deleteProblem(idProblem)
            .then(loadProblems)
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
            title: 'Usuario Asignado',
            dataIndex: 'assignedUser',
            key: 'assignedUser',
        },
        {
            title: 'Acciones',
            key: 'actions',
            render: (text, record) => (
                <>
                    <Button onClick={() => navigate(`/problems/${record.id}`)}>
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

    const loadProblems = () => {
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
    }

    useEffect(() => {
        loadProblems()
    }, [])

    return (
        <div>
            <Flex justify='space-between' align='center'>
                <Typography.Title>Problemas</Typography.Title>
                <Button hidden={!hasCreatePermission(user)} onClick={() => navigate('/problems/new')}>
                    + Agregar
                </Button>
            </Flex>
            <Table columns={columns} dataSource={data} pagination={false} locale={<Empty />} />
        </div>
    );
};

export default Problems;