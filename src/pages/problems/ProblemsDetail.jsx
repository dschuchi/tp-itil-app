import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProblemForm from './ProblemForm';
import { Button, Form, Input, List, Spin } from 'antd';
import { getProblem, getProblemComments, postProblemComment } from '../../api/problem';

const ProblemsDetail = () => {
    const { id } = useParams();
    const [problem, setProblem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState('');

    const loadProblems = () => {
        getProblem(id).then(data => {
            setProblem(data);
            setLoading(false);
        });
    }

    useEffect(() => {
        loadProblems()
        loadComments()
    }, [id]);

    const loadComments = () => {
        getProblemComments(id)
            .then(res => {
                setComments(res.comments)
            })
            .catch(console.error)
    }

    const handleSendComment = () => {
        if (!newComment.trim()) return;

        postProblemComment(id, newComment)
            .then(() => {
                loadComments();
                setNewComment('');
            })
            .catch(console.error);
    }

    if (loading) return <Spin tip="Cargando problema..." />;

    return (
        <div>
            <h1>Detalle del Problema</h1>
            <ProblemForm
                disabled={true}
                initialValues={{
                    title: problem.title,
                    description: problem.description,
                    configurationItemId: problem.configurationItemId,
                    assignedUserId: problem.assignedUserId,
                    impact: problem.impact,
                    priority: problem.priority,
                    incidentIds: problem.incidentIds,
                }}
                submitButton={false}
            />

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

export default ProblemsDetail;
