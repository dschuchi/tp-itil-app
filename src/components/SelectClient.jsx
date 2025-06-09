import { Select, Input, Form } from "antd";
import { useEffect, useState } from "react";
import { getClients } from "../api/account";

const SelectClient = ({ form, value, placeholder = 'Seleccione el Config Item', disabled, ...rest }) => {
    const [options, setOptions] = useState([]);
    const [clients, setClients] = useState([]);

    const handleChange = (selectedId) => {
        const selected = clients.find((c) => c.id === selectedId);
        console.log(selected)
        if (selected) {
            form.setFieldsValue({
                clientName: selected.name,
                clientEmail: selected.email,
            });
        }
    };

    const loadClients = () => {
        getClients()
            .then(data => {
                const formattedOptions = data.map((user) => ({
                    label: `${user.id} - ${user.email} - ${user.name}`,
                    value: user.id,
                }));
                setOptions(formattedOptions);
                setClients(data)
            })
            .catch(console.error)
    }

    useEffect(() => {
        loadClients()
    }, [])

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
