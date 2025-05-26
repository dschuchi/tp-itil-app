import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { createConfigItem } from '../../api/configuration';

const { TextArea } = Input;

const ConfigurationsNew = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const { user } = useAuth();

    const handleSubmit = (values) => {
        createConfigItem(
            {
                title: values.title,
                description: values.description,
                userId: user.id,
                versionId: "0",
                versionHistory: "0"
            }
        )
            .then(() => {
                navigate('/configurations');
            })
            .catch((error) => {
                console.error('Error creating configuration item:', error);
            });
    };

    return (
        <div>
            <h1>Crear Item de Configuración</h1>
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

export default ConfigurationsNew;
