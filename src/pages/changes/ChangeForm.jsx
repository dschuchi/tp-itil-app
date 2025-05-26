import { Form, Input, Select, DatePicker } from 'antd';
import SelectConfigItem from '../../components/SelectConfigItem';
import SelectAssignedUser from '../../components/SelectAssignedUser';
import SelectProblems from '../../components/SelectProblems';
import SelectIncidents from '../../components/SelectIncidents';

const { TextArea } = Input;

const ChangeForm = ({ form, onFinish, disabled = false, submitButton = true, initialValues = {} }) => {
    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={initialValues}
        >
            <Form.Item label="Título" name="title" rules={[{ required: true, message: 'Ingrese un título' }]}>
                <Input disabled={disabled} />
            </Form.Item>

            <Form.Item label="Descripción" name="description" rules={[{ required: true, message: 'Ingrese una descripción' }]}>
                <TextArea rows={4} disabled={disabled} />
            </Form.Item>

            <Form.Item label="Config Item" name="configurationItemId" rules={[{ required: true }]}>
                <SelectConfigItem disabled={disabled} />
            </Form.Item>

            <Form.Item label="Nombre del Cliente" name="clientName" rules={[{ required: true }]}>
                <Input disabled={disabled} />
            </Form.Item>

            <Form.Item label="Email del Cliente" name="clientEmail" rules={[{ required: true }]}>
                <Input disabled={disabled} />
            </Form.Item>

            <Form.Item label="Estado" name="state" rules={[{ required: true }]}>
                <Select disabled={disabled}>
                    <Select.Option value="open">Abierto</Select.Option>
                    <Select.Option value="in_progress">En Progreso</Select.Option>
                    <Select.Option value="implemented">Implementado</Select.Option>
                    <Select.Option value="closed">Cerrado</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item label="Usuario Asignado" name="assignedUserId" rules={[{ required: true }]}>
                <SelectAssignedUser disabled={disabled} />
            </Form.Item>

            <Form.Item label="Impacto" name="impact" rules={[{ required: true }]}>
                <Select disabled={disabled}>
                    <Select.Option value="low">Bajo</Select.Option>
                    <Select.Option value="medium">Medio</Select.Option>
                    <Select.Option value="high">Alto</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item label="Prioridad" name="priority" rules={[{ required: true }]}>
                <Select disabled={disabled}>
                    <Select.Option value="low">Baja</Select.Option>
                    <Select.Option value="medium">Media</Select.Option>
                    <Select.Option value="high">Alta</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item label="Fecha Programada" name="scheduledDate" rules={[{ required: true, message: 'Ingrese la fecha programada' }]}>
                <DatePicker disabled={disabled} style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
                label="Incidentes Asociados"
                name="incidentIds"
                rules={[{ message: 'Seleccione al menos un incidente' }]}
            >
                <SelectIncidents disabled={disabled} />
            </Form.Item>

            <Form.Item
                label="Problemas Asociados"
                name="problemIds"
                rules={[{ message: 'Seleccione al menos un problema' }]}
            >
                <SelectProblems disabled={disabled} />
            </Form.Item>

            {submitButton && (
                <Form.Item>
                    <button type="submit" className="ant-btn ant-btn-primary" disabled={disabled}>
                        Guardar Cambio
                    </button>
                </Form.Item>
            )}
        </Form>
    );
};

export default ChangeForm;
