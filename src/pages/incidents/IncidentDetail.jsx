import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Form, Spin } from 'antd';
import IncidentForm from './IncidentForm';
import { getIncident } from '../../api/incident';

const IncidentDetail = () => {
    const { id } = useParams();
    const [incident, setIncident] = useState(null);
    const [loading, setLoading] = useState(true);
    const [form] = Form.useForm();

    useEffect(() => {
        getIncident(id)
            .then(data => {
                setIncident(data);
                form.setFieldsValue(data);
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <Spin />;

    return (
        <div>
            <h1>Detalle del Incidente</h1>
            <IncidentForm form={form} disabled={true} submitButton={false} />
        </div>
    );
};

export default IncidentDetail;
