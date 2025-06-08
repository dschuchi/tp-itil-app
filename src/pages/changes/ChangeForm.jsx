import { Form, Input, Select, DatePicker, Button } from 'antd';
import SelectConfigItem from '../../components/SelectConfigItem';
import SelectAssignedUser from '../../components/SelectAssignedUser';
import SelectProblems from '../../components/SelectProblems';
import SelectIncidents from '../../components/SelectIncidents';
import SelectClient from '../../components/SelectClient';
import SelectStatus from '../../components/SelectStatus';

const { TextArea } = Input;

const ChangeForm = ({ form, onFinish, disabled = false, submitButton = true, initialValues = {}, edit = false }) => {
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
                <SelectStatus disabled={disabled && !edit} />
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

            <SelectClient form={form} disabled={disabled} />

            <Form.Item label="Impacto" name="impact">
                <Select disabled={disabled}>
                    <Select.Option value="low">Bajo</Select.Option>
                    <Select.Option value="medium">Medio</Select.Option>
                    <Select.Option value="high">Alto</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item label="Prioridad" name="priority">
                <Select disabled={disabled}>
                    <Select.Option value="low">Baja</Select.Option>
                    <Select.Option value="medium">Media</Select.Option>
                    <Select.Option value="high">Alta</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item label="Fecha Programada" name="scheduledDate">
                <DatePicker disabled={disabled} style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
                label="Incidentes Asociados"
                name="incidentIds"
                hidden={disabled}
            >
                <SelectIncidents disabled={disabled} />
            </Form.Item>

            <Form.Item
                label="Problemas Asociados"
                name="problemIds"
                hidden={disabled}
            >
                <SelectProblems disabled={disabled} />
            </Form.Item>
        </Form>
    );
};

export default ChangeForm;
