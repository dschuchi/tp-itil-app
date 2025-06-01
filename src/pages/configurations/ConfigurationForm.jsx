import { Button, Form, Input } from "antd"

const { TextArea } = Input;


const ConfigurationForm = ({ form, onFinish, disabled = false, submitButton = true, initialValues = {} }) => {
    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={initialValues}
        >
            <Form.Item
                label="Titulo"
                name="title"
                rules={[{ required: true, message: 'Por favor ingrese el titulo' }]}
            >
                <Input disabled={disabled} placeholder="Ingrese el titulo" />
            </Form.Item>

            <Form.Item
                label="Descripción"
                name="description"
                rules={[{ required: true, message: 'Por favor ingrese la descripción' }]}
            >
                <TextArea disabled={disabled} placeholder="Ingrese la descripción" rows={4} />
            </Form.Item>

            {submitButton && (
                <Form.Item>
                    <Button disabled={disabled} type="primary" htmlType="submit">
                        Crear
                    </Button>
                </Form.Item>
            )}
        </Form>
    )
}

export default ConfigurationForm