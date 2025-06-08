import { Button, Form, Input, Select } from 'antd';
import SelectConfigItem from '../../components/SelectConfigItem';
import SelectAssignedUser from '../../components/SelectAssignedUser';
import SelectIncidents from '../../components/SelectIncidents';

const { TextArea } = Input;

const ProblemForm = ({
    form,
    onFinish,
    disabled = false,
    submitButton = true,
    initialValues = {},
}) => {
    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={initialValues}
        >

            {submitButton && (
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType='submit'
                        disabled={disabled}
                    >
                        Guardar
                    </Button>
                </Form.Item>
            )}

            <Form.Item
                label="Título"
                name="title"
                rules={[{ required: true, message: 'Ingrese el título' }]}
            >
                <Input disabled={disabled} />
            </Form.Item>

            <Form.Item
                label="Descripción"
                name="description"
                rules={[{ required: true, message: 'Ingrese la descripción' }]}
            >
                <TextArea rows={4} disabled={disabled} />
            </Form.Item>

            <Form.Item
                label="Config Item"
                name="configurationItemId"
                rules={[{ required: true, message: 'Seleccione el Config Item' }]}
            >
                <SelectConfigItem disabled={disabled} />
            </Form.Item>

            <Form.Item
                label="Usuario Asignado"
                name="assignedUserId"
                rules={[{ required: true, message: 'Seleccione el usuario asignado' }]}
            >
                <SelectAssignedUser disabled={disabled} />
            </Form.Item>

            <Form.Item
                label="Impacto"
                name="impact"
                rules={[{ required: true, message: 'Seleccione el impacto' }]}
            >
                <Select disabled={disabled} placeholder="Seleccione el impacto">
                    <Select.Option value="low">Bajo</Select.Option>
                    <Select.Option value="medium">Medio</Select.Option>
                    <Select.Option value="high">Alto</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item
                label="Prioridad"
                name="priority"
                rules={[{ required: true, message: 'Seleccione la prioridad' }]}
            >
                <Select disabled={disabled} placeholder="Seleccione la prioridad">
                    <Select.Option value="low">Bajo</Select.Option>
                    <Select.Option value="medium">Medio</Select.Option>
                    <Select.Option value="high">Alto</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item
                label="Incidentes Relacionados"
                name="incidentIds"
                rules={[{ required: true, message: 'Seleccione al menos un incidente' }]}
            >
                <SelectIncidents disabled={disabled} />
            </Form.Item>
        </Form>
    );
};

export default ProblemForm;
