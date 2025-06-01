import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button, Form, Spin } from 'antd';
import IncidentForm from './IncidentForm';
import { getIncident, updateIncident } from '../../api/incident';

const IncidentDetail = () => {
    const { id } = useParams();
    const [incident, setIncident] = useState(null);
    const [loading, setLoading] = useState(true);
    const [form] = Form.useForm();
    const [edit, setEdit] = useState(false)

    const loadIncident = () => {
        getIncident(id)
            .then(data => {
                setIncident(data);
                form.setFieldsValue(data);
            })
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        loadIncident()
    }, [id]);

    const handleSubmit = (values) => {
        updateIncident(id, values)
            .then(() => {
                loadIncident()
                setEdit(false)
            })
            .catch(console.error)
    }

    if (loading) return <Spin />;

    return (
        <div>
            <h1>Detalle del Incidente</h1>
            <Button onClick={() => setEdit(!edit)}>Editar</Button>
            <IncidentForm form={form} disabled={true} submitButton={edit} onFinish={handleSubmit} edit={edit} />
        </div>
    );
};

export default IncidentDetail;
