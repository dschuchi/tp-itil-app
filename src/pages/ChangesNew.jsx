import { Form, Input, Select, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { createChange } from '../api/change';

const { TextArea } = Input;

const ChangesNew = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const { user } = useAuth();

    const handleSubmit = (values) => {
        createChange(
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
                navigate('/changes');
            })
            .catch((error) => {
                console.error('Error creating configuration item:', error);
            });
    };

    return (
        <div>
            <h1>Nuevo Cambio</h1>
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

export default ChangesNew;
