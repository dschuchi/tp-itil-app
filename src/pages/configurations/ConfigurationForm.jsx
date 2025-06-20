import { Button, Form, Input } from "antd"
import SelectClient from "../../components/SelectClient";

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

            <SelectClient form={form} disabled={disabled} />

            <Form.Item
                label="Versión"
                name="versionId"
                hidden={!disabled}
            >
                <Input disabled={disabled} />
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