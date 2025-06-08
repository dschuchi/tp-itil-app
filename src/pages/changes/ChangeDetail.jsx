import { Button, Form, Input, List, Spin } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChangeForm from "./ChangeForm";
import { getChange, getChangeComments, postChangeComment, updateChange } from "../../api/change";
import dayjs from 'dayjs'

const ChangeDetail = () => {
    const { id } = useParams();
    const [change, setChange] = useState(null);
    const [form] = Form.useForm();
    const [edit, setEdit] = useState(false)
    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState('');

    const loadChange = () => {
        getChange(id)
            .then(data => {
                const formattedData = {
                    ...data,
                    scheduledDate: dayjs(data.scheduledDate)
                }
                setChange(formattedData)
                form.setFieldsValue(formattedData)
            })
            .catch(console.error)
            .finally(() => setLoading(false))
    }

    const handleSubmit = (values) => {
        updateChange(id, values)
            .then(() => {
                loadChange()
                setEdit(false)
            })
            .catch(console.error)
    }

    const loadComments = () => {
        getChangeComments(id)
            .then(res => {
                setComments(res.comments)
            })
            .catch(console.error)
    }

    const handleSendComment = () => {
        if (!newComment.trim()) return;

        postChangeComment(id, newComment)
            .then(() => {
                loadComments();
                setNewComment('');
            })
            .catch(console.error);
    }

    useEffect(() => {
        loadChange()
        loadComments()
    }, [id])

    if (loading) return <Spin />;

    return (
        <>
            <h1>Detalle de petición de cambio</h1>
            <Button onClick={() => setEdit(!edit)}>Editar</Button>
            <ChangeForm form={form} disabled={true} submitButton={edit} onFinish={handleSubmit} edit={edit} />

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
        </>
    )
}

export default ChangeDetail