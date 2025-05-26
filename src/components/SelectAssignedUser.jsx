import { Select } from 'antd';
import { useEffect, useState } from 'react';
import { getUsers } from '../api/account';

const SelectAssignedUser = ({ value, onChange, placeholder = 'Seleccione un usuario' }) => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        getUsers()
            .then(data => {
                const formattedOptions = data.map((email, index) => ({
                    label: `${index} - ${email}`,
                    value: index,
                }));
                setOptions(formattedOptions);
            })
            .catch(err => {
                console.error('Error cargando usuarios:', err);
            });
    }, []);

    return (
        <Select
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            showSearch
            filterOption={(input, option) =>
                option.label.toLowerCase().includes(input.toLowerCase())
            }
            options={options}
        />
    );
};

export default SelectAssignedUser;
