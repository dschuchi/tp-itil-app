import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProblemForm from './ProblemForm';
import { Spin } from 'antd';
import { deleteProblemRelatedIncident, getProblem, getProblemComments, getProblemRelatedIncidents, postProblemComment } from '../../api/problem';
import CommentSection from '../../components/CommentSection';
import RelatedItemList from '../../components/RelatedItemList';
import AddIncident from '../../components/AddIncident';

const ProblemsDetail = () => {
    const { id } = useParams();
    const [problem, setProblem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [incidents, setIncidents] = useState([])


    const loadProblems = () => {
        getProblem(id).then(data => {
            setProblem(data);
            setLoading(false);
        });
    }

    const handleDeleteIncident = (idIncident) => {
        deleteProblemRelatedIncident(id, idIncident)
            .then(loadIncidents)
            .catch(console.error)
    }

    const loadIncidents = () => {
        getProblemRelatedIncidents(id)
            .then(setIncidents)
            .catch(console.error)
    }

    useEffect(() => {
        loadProblems()
        loadIncidents()
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

            <RelatedItemList
                data={incidents}
                header='Incidentes relacionados'
                onDelete={handleDeleteIncident}
            />

            <AddIncident id={id} loadIncidents={loadIncidents} />

            <CommentSection
                resourceId={id}
                fetchComments={getProblemComments}
                postComment={postProblemComment}
            />
        </div>
    );
};

export default ProblemsDetail;
