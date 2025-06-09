import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProblemForm from './ProblemForm';
import { Button, Form, Spin } from 'antd';
import { deleteProblemRelatedIncident, getProblem, getProblemComments, getProblemRelatedIncidents, postProblemComment, updateProblem } from '../../api/problem';
import CommentSection from '../../components/CommentSection';
import RelatedItemList from '../../components/RelatedItemList';
import AddIncident from '../../components/AddIncident';

const ProblemsDetail = () => {
    const { id } = useParams();
    const [problem, setProblem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [incidents, setIncidents] = useState([])
    const [form] = Form.useForm();
    const [edit, setEdit] = useState(false)


    const loadProblem = () => {
        getProblem(id).then(data => {
            setProblem(data);
            setLoading(false);
            form.setFieldsValue(data)
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

    const handleSubmit = (values) => {
        updateProblem(id, values)
            .then(() => {
                loadProblem()
                setEdit(false)
            })
            .catch(console.log)
    }

    useEffect(() => {
        loadProblem()
        loadIncidents()
    }, [id]);

    if (loading) return <Spin tip="Cargando problema..." />;

    return (
        <div>
            <h1>Detalle del Problema</h1>
            <Button onClick={() => setEdit(!edit)}>Editar</Button>
            <ProblemForm
                form={form} disabled={true}
                submitButton={edit} onFinish={handleSubmit} edit={edit}
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
