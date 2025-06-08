import { Button, Form, List, Space, Spin } from "antd";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ChangeForm from "./ChangeForm";
import { getChange, getChangeComments, getChangeRelatedIncidents, postChangeComment, updateChange } from "../../api/change";
import dayjs from 'dayjs'
import CommentSection from "../../components/CommentSection";
import { LinkOutlined } from "@ant-design/icons";

const ChangeDetail = () => {
    const { id } = useParams();
    const [change, setChange] = useState(null);
    const [form] = Form.useForm();
    const [edit, setEdit] = useState(false)
    const [loading, setLoading] = useState(true);
    const [incidents, setIncidents] = useState([])

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

    useEffect(() => {
        loadChange()
        loadIncidents()
    }, [id])

    if (loading) return <Spin />;

    return (
        <>
            <h1>Detalle de petición de cambio</h1>
            <Button onClick={() => setEdit(!edit)}>Editar</Button>
            <ChangeForm form={form} disabled={true} submitButton={edit} onFinish={handleSubmit} edit={edit} />

            <List
                dataSource={incidents}
                header={<strong>Incidentes relacionados</strong>}
                renderItem={i => (
                    <List.Item>
                        <Space>
                            <Link to={`/incidents/${i.id}`}>
                                <LinkOutlined /> {i.id}
                            </Link>
                            - {i.title}
                        </Space>
                    </List.Item>
                )}
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