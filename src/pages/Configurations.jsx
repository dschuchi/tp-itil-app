import { Button, Empty, Flex, Table, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

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
            dataIndex: 'creationDate',
            key: 'creationDate',
        },
        {
            title: 'Usuario',
            dataIndex: 'createdBy',
            key: 'createdBy',
        },
    ];

    const data = [

    ];

    const navigate = useNavigate();

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