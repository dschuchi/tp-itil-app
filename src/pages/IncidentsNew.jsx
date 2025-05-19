import { Button, Form, Input, Select } from 'antd';
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
                ...values,
                userId: user.id,
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

                <Form.Item
                    label='Config Item'
                    name='configurationItemId'
                    rules={[{ required: true, message: 'Por favor ingrese el Config Item' }]}
                >
                    <Input placeholder="Ingrese el Config Item" />
                </Form.Item>

                <Form.Item
                    label='Causa Raíz'
                    name='rootCause'
                    rules={[{ required: true, message: 'Por favor ingrese la Causa Raíz' }]}
                >
                    <Input placeholder="Ingrese la Causa Raíz" />
                </Form.Item>

                <Form.Item
                    label='Nombre del Cliente'
                    name='clientName'
                    rules={[{ required: true, message: 'Por favor ingrese el Nombre del Cliente' }]}
                >
                    <Input placeholder="Ingrese el Nombre del Cliente" />
                </Form.Item>

                <Form.Item
                    label='Email del Cliente'
                    name='clientEmail'
                    rules={[{ required: true, message: 'Por favor ingrese el Email del Cliente' }]}
                >
                    <Input placeholder="Ingrese el Email del Cliente" />
                </Form.Item>

                <Form.Item
                    label='Estado'
                    name='state'
                    rules={[{ required: true, message: 'Por favor ingrese el Estado' }]}
                >
                    <Select placeholder="Seleccione el Estado">
                        <Select.Option value="open">Abierto</Select.Option>
                        <Select.Option value="in_progress">En Progreso</Select.Option>
                        <Select.Option value="resolved">Resuelto</Select.Option>
                        <Select.Option value="closed">Cerrado</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label='Usuario Asignado'
                    name='assignedUserId'
                    rules={[{ required: true, message: 'Por favor ingrese el Usuario Asignado' }]}
                >
                    <Input placeholder="Ingrese el Usuario Asignado" />
                </Form.Item>

                <Form.Item
                    label='Impacto'
                    name='impact'
                    rules={[{ required: true, message: 'Por favor ingrese el Impacto' }]}
                >
                    <Select placeholder="Seleccione el Impacto">
                        <Select.Option value="low">Bajo</Select.Option>
                        <Select.Option value="medium">Medio</Select.Option>
                        <Select.Option value="high">Alto</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label='Prioridad'
                    name='priority'
                    rules={[{ required: true, message: 'Por favor ingrese la Prioridad' }]}
                >
                    <Select placeholder="Seleccione la Prioridad">
                        <Select.Option value="low">Bajo</Select.Option>
                        <Select.Option value="medium">Medio</Select.Option>
                        <Select.Option value="high">Alto</Select.Option>
                    </Select>
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