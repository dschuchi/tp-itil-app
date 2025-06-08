import { Button, Form, Spin } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChangeForm from "./ChangeForm";
import { getChange, getChangeComments, postChangeComment, updateChange } from "../../api/change";
import dayjs from 'dayjs'
import CommentSection from "../../components/CommentSection";

const ChangeDetail = () => {
    const { id } = useParams();
    const [change, setChange] = useState(null);
    const [form] = Form.useForm();
    const [edit, setEdit] = useState(false)
    const [loading, setLoading] = useState(true);

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

    useEffect(() => {
        loadChange()
    }, [id])

    if (loading) return <Spin />;

    return (
        <>
            <h1>Detalle de petición de cambio</h1>
            <Button onClick={() => setEdit(!edit)}>Editar</Button>
            <ChangeForm form={form} disabled={true} submitButton={edit} onFinish={handleSubmit} edit={edit} />

            <CommentSection
                resourceId={id}
                fetchComments={getChangeComments}
                postComment={postChangeComment}
            />
        </>
    )
}

export default ChangeDetail