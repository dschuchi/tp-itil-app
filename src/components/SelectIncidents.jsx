import { Select } from 'antd';
import { useEffect, useState } from 'react';
import { getIncidents } from '../api/incident';

const SelectIncidents = ({ value, onChange, disabled = false }) => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        getIncidents().then(data => {
            const formatted = data.map(i => ({
                label: `${i.id} - ${i.title}`,
                value: i.id,
            }));
            setOptions(formatted);
        });
    }, []);

    return (
        <Select
            mode="multiple"
            showSearch
            placeholder="Seleccione incidentes"
            value={value}
            onChange={onChange}
            disabled={disabled}
            options={options}
            filterOption={(input, option) =>
                option.label.toLowerCase().includes(input.toLowerCase())
            }
        />
    );
};

export default SelectIncidents;
