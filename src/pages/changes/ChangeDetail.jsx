import { Button, Form, Spin } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChangeForm from "./ChangeForm";
import { deleteChangeRelatedIncidents, deleteChangeRelatedProblem, getChange, getChangeComments, getChangeRelatedIncidents, getChangeRelatedProblems, postChangeComment, updateChange } from "../../api/change";
import dayjs from 'dayjs'
import CommentSection from "../../components/CommentSection";
import RelatedItemList from "../../components/RelatedItemList";

const ChangeDetail = () => {
    const { id } = useParams();
    const [change, setChange] = useState(null);
    const [form] = Form.useForm();
    const [edit, setEdit] = useState(false)
    const [loading, setLoading] = useState(true);
    const [incidents, setIncidents] = useState([])
    const [problems, setProblems] = useState([])

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

    const loadIncidents = () => {
        getChangeRelatedIncidents(id)
            .then(setIncidents)
            .catch(console.error)
    }

    const loadProblems = () => {
        getChangeRelatedProblems(id)
            .then(setProblems)
            .catch(console.error)
    }

    const handleDeleteProblem = (idProblem) => {
        deleteChangeRelatedProblem(id, idProblem)
            .then(loadProblems)
            .catch(console.error)
    }

    const handleDeleteIncident = (idIncident) => {
        deleteChangeRelatedIncidents(id, idIncident)
            .then(loadIncidents)
            .catch(console.error)
    }

    useEffect(() => {
        loadChange()
        loadIncidents()
        loadProblems()
    }, [id])

    if (loading) return <Spin />;

    return (
        <>
            <h1>Detalle de petición de cambio</h1>
            <Button onClick={() => setEdit(!edit)}>Editar</Button>
            <ChangeForm form={form} disabled={true} submitButton={edit} onFinish={handleSubmit} edit={edit} />

            <RelatedItemList
                data={incidents}
                header="Incidentes relacionados"
                basePath="/incidents"
                onDelete={handleDeleteIncident}
            />

            <RelatedItemList
                data={problems}
                header="Problemas relacionados"
                basePath="/problems"
                onDelete={handleDeleteProblem}
            />

            <CommentSection
                resourceId={id}
                fetchComments={getChangeComments}
                postComment={postChangeComment}
            />
        </>
    )
}

export default ChangeDetail