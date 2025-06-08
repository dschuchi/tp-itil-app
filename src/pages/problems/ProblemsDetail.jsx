import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProblemForm from './ProblemForm';
import { Spin } from 'antd';
import { getProblem, getProblemComments, postProblemComment } from '../../api/problem';
import CommentSection from '../../components/CommentSection';

const ProblemsDetail = () => {
    const { id } = useParams();
    const [problem, setProblem] = useState(null);
    const [loading, setLoading] = useState(true);

    const loadProblems = () => {
        getProblem(id).then(data => {
            setProblem(data);
            setLoading(false);
        });
    }

    useEffect(() => {
        loadProblems()
    }, [id]);

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

            <CommentSection
                resourceId={id}
                fetchComments={getProblemComments}
                postComment={postProblemComment}
            />
        </div>
    );
};

export default ProblemsDetail;
