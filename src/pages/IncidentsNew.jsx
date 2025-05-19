import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { createIncident } from '../api/incident';

const { TextArea } = Input;

const IncidentsNew = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const { user } = useAuth();

    const handleSubmit = (values) => {
        createIncident(
            {
                title: values.title,
                description: values.description,
                userId: user.id,
                configurationItemId: 0,
                assignedUserId: 0,
                impact: "TBD",
                priority: "TBD",
                incidentIds: [
                    0
                ]
            }
        )
            .then(() => {
                navigate('/incidents');
            })
            .catch((error) => {
                console.error('Error creating incident:', error);
            });
    };

    return (
        <div>
            <h1>Crear Incidente</h1>
            <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                initialValues={{
                    name: '',
                    description: '',
                    type: '',
                }}
            >
                <Form.Item
                    label="Titulo"
                    name="title"
                    rules={[{ required: true, message: 'Por favor ingrese el titulo' }]}
                >
                    <Input placeholder="Ingrese el titulo" />
                </Form.Item>

                <Form.Item
                    label="Descripción"
                    name="description"
                    rules={[{ required: true, message: 'Por favor ingrese la descripción' }]}
                >
                    <TextArea placeholder="Ingrese la descripción" rows={4} />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Crear
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default IncidentsNew;