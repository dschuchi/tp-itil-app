import { Select, Input, Form } from "antd";

const clients = [
    { id: 1, name: "Juan Pérez", email: "juan@example.com" },
    { id: 2, name: "Ana Gómez", email: "ana@example.com" },
    { id: 3, name: "Carlos Ruiz", email: "carlos@example.com" },
];

const SelectClient = ({ form, value, placeholder = 'Seleccione el Config Item', disabled, ...rest }) => {
    const options = clients.map((client) => ({
        label: client.name,
        value: client.id,
    }));

    const handleChange = (selectedId) => {
        const selected = clients.find((c) => c.id === selectedId);
        if (selected) {
            form.setFieldsValue({
                [name]: selected.id,
                clientName: selected.name,
                clientEmail: selected.email,
            });
        }
    };

    return (
        <>
            <Form.Item label="Cliente" hidden={disabled}>
                <Select
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholder}
                    showSearch
                    filterOption={(input, option) =>
                        option.label.toLowerCase().includes(input.toLowerCase())
                    }
                    options={options}
                    disabled={disabled}
                    {...rest}
                />
            </Form.Item>


            <Form.Item label='Nombre cliente' name="clientName" hidden={!disabled}>
                <Input disabled />
            </Form.Item>

            <Form.Item label='Correo cliente' name="clientEmail" hidden={!disabled}>
                <Input disabled />
            </Form.Item>
        </>
    );
};

export default SelectClient;
