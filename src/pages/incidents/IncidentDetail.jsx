import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button, Form, Spin } from 'antd';
import IncidentForm from './IncidentForm';
import { getIncidentComments, getIncident, postIncidentComment, updateIncident } from '../../api/incident';
import CommentSection from '../../components/CommentSection';
import { useAuth } from '../../context/AuthContext';
import { hasEditingPermission } from '../../service/permissionService';

const IncidentDetail = () => {
    const { id } = useParams();
    const [incident, setIncident] = useState(null);
    const [loading, setLoading] = useState(true);
    const [form] = Form.useForm();
    const [edit, setEdit] = useState(false)
    const { user } = useAuth()

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
            <Button hidden={!hasEditingPermission(user)} onClick={() => setEdit(!edit)}>Editar</Button>
            <IncidentForm
                form={form}
                disabled={true}
                submitButton={edit}
                onFinish={handleSubmit}
                edit={edit}
            />

            <CommentSection
                resourceId={id}
                fetchComments={getIncidentComments}
                postComment={postIncidentComment}
            />
        </div>
    );
};

export default IncidentDetail;
