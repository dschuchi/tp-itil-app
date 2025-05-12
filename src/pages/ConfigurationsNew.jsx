import { useState } from 'react';
import { Form, Input, Select, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const { TextArea } = Input;

const ConfigurationsNew = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        console.log('Form submitted:', values);
        navigate('/configurations');
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
                    label="Nombre"
                    name="name"
                    rules={[{ required: true, message: 'Por favor ingrese el nombre' }]}
                >
                    <Input placeholder="Ingrese el nombre" />
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
