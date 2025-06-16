import { Select } from 'antd';
import { useEffect, useState } from 'react';
import { getConfigItems } from '../api/configuration';

const SelectConfigItem = ({ value, onChange, placeholder = 'Seleccione el Config Item', ...rest }) => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        getConfigItems()
            .then(data => {
                const formattedOptions = data.map(item => ({
                    label: `${item.id} - ${item.title}`,
                    value: item.id,
                }));
                setOptions(formattedOptions);
            })
            .catch(err => {
                console.error('Error cargando Config Items:', err);
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
            {...rest}
        />
    );
};

export default SelectConfigItem;
