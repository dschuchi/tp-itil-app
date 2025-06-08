import { useEffect, useState } from 'react';
import { Button, Form, Input, List, Spin } from 'antd';
import { useAuth } from '../context/AuthContext';

const CommentSection = ({ resourceId, fetchComments, postComment }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [loading, setLoading] = useState(true);
    const { user } = useAuth()

    const loadComments = () => {
        fetchComments(resourceId)
            .then(res => {
                setComments(res.comments || []);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error al cargar comentarios:', error);
                setLoading(false);
            });
    };

    useEffect(() => {
        loadComments();
    }, [resourceId]);

    const handleSendComment = () => {
        if (!newComment.trim()) return;

        postComment(resourceId, `${user.email}: ${newComment}`)
            .then(() => {
                loadComments();
                setNewComment('');
            })
            .catch(console.error);
    };

    if (loading) return <Spin tip="Cargando comentarios..." />;

    return (
        <div>
            <List
                header={<strong>Comentarios</strong>}
                dataSource={comments}
                renderItem={c => <List.Item>{c}</List.Item>}
            />

            <Form layout="inline" onFinish={handleSendComment}>
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

export default CommentSection;
