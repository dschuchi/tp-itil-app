import { Select } from 'antd';

const SelectStatus = ({ value, onChange, disabled = false }) => {
    return (
        <Select
            value={value}
            onChange={onChange}
            disabled={disabled}
        >
            <Select.Option value="ABIERTO">Abierto</Select.Option>
            <Select.Option value="EN CURSO">En Curso</Select.Option>
            <Select.Option value="ACEPTADO">Aceptado</Select.Option>
            <Select.Option value="RECHAZADO">Rechazado</Select.Option>
            <Select.Option value="IMPLEMENTADO">Implementado</Select.Option>
        </Select>
    );
};

export default SelectStatus;
