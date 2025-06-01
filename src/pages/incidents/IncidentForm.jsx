import { Button, Form, Input, Select } from 'antd';
import SelectAssignedUser from '../../components/SelectAssignedUser';
import SelectConfigItem from '../../components/SelectConfigItem';

const { TextArea } = Input;

const IncidentForm = ({ form, onFinish, disabled = false, submitButton = true, initialValues = {}, edit = false }) => {
    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={initialValues}
        >
            {submitButton && (
                <Form.Item>
                    <Button type="primary" htmlType="submit" disabled={disabled && !edit}>
                        Guardar
                    </Button>
                </Form.Item>
            )}

            <Form.Item label="Estado" name="state">
                <Select disabled={disabled && !edit}>
                    <Select.Option value="open">Abierto</Select.Option>
                    <Select.Option value="in_progress">En Progreso</Select.Option>
                    <Select.Option value="resolved">Resuelto</Select.Option>
                    <Select.Option value="closed">Cerrado</Select.Option>
                    <Select.Option value="IMPLEMENTADO">Implementado</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item label="Usuario Asignado" name="assignedUserId">
                <SelectAssignedUser disabled={disabled && !edit} />
            </Form.Item>

            <Form.Item label="Título" name="title">
                <Input disabled={disabled} />
            </Form.Item>

            <Form.Item label="Descripción" name="description">
                <TextArea rows={4} disabled={disabled} />
            </Form.Item>

            <Form.Item label="Config Item" name="configurationItemId">
                <SelectConfigItem disabled={disabled} />
            </Form.Item>

            <Form.Item label="Causa Raíz" name="rootCause">
                <Input disabled={disabled} />
            </Form.Item>

            <Form.Item label="Nombre del Cliente" name="clientName">
                <Input disabled={disabled} />
            </Form.Item>

            <Form.Item label="Email del Cliente" name="clientEmail">
                <Input disabled={disabled} />
            </Form.Item>

            <Form.Item label="Impacto" name="impact">
                <Select disabled={disabled}>
                    <Select.Option value="low">Bajo</Select.Option>
                    <Select.Option value="medium">Medio</Select.Option>
                    <Select.Option value="high">Alto</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item label="Prioridad" name="priority">
                <Select disabled={disabled}>
                    <Select.Option value="low">Bajo</Select.Option>
                    <Select.Option value="medium">Medio</Select.Option>
                    <Select.Option value="high">Alto</Select.Option>
                </Select>
            </Form.Item>
        </Form>
    );
};

export default IncidentForm;
