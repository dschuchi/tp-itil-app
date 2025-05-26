import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProblemForm from './ProblemForm';
import { Spin } from 'antd';
import { getProblem } from '../../api/problem';

const ProblemsDetail = () => {
    const { id } = useParams();
    const [problem, setProblem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProblem(id).then(data => {
            setProblem(data);
            setLoading(false);
        });
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
        </div>
    );
};

export default ProblemsDetail;
