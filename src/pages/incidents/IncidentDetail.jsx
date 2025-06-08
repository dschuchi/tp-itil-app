import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button, Form, Input, List, Spin } from 'antd';
import IncidentForm from './IncidentForm';
import { getComments, getIncident, postComment, updateIncident } from '../../api/incident';

const IncidentDetail = () => {
    const { id } = useParams();
    const [incident, setIncident] = useState(null);
    const [loading, setLoading] = useState(true);
    const [form] = Form.useForm();
    const [edit, setEdit] = useState(false)
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState('');


    const loadIncident = () => {
        getIncident(id)
            .then(data => {
                setIncident(data);
                form.setFieldsValue(data);
            })
            .finally(() => setLoading(false));
    }

    const loadComments = () => {
        getComments(id)
            .then(res => {
                setComments(res.comments)
            })
            .catch(console.error)
    }

    useEffect(() => {
        loadIncident()
        loadComments()
    }, [id]);

    const handleSubmit = (values) => {
        updateIncident(id, values)
            .then(() => {
                loadIncident()
                setEdit(false)
            })
            .catch(console.error)
    }

    const handleSendComment = () => {
        if (!newComment.trim()) return;

        postComment(id, newComment)
            .then(() => {
                loadComments();
                setNewComment('');
            })
            .catch(console.error);
    }



    if (loading) return <Spin />;

    return (
        <div>
            <h1>Detalle del Incidente</h1>
            <Button onClick={() => setEdit(!edit)}>Editar</Button>
            <IncidentForm form={form} disabled={true} submitButton={edit} onFinish={handleSubmit} edit={edit} />

            <h2>Comentarios</h2>
            <List
                dataSource={comments}
                renderItem={c => (
                    <List.Item>{c}</List.Item>
                )}
            />

            <Form
                layout="inline"
                onFinish={handleSendComment}
            >
                <Form.Item style={{ flex: 1 }}>
                    <Input
                        value={newComment}
                        onChange={e => setNewComment(e.target.value)}
                        placeholder="Escribe un comentario"
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Agregar
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default IncidentDetail;
