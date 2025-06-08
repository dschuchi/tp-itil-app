import { Select } from 'antd';
import { useEffect, useState } from 'react';
import { getProblems } from '../api/problem';

const SelectProblems = ({ value, onChange, disabled = false }) => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        getProblems().then(data => {
            const formatted = data.map(p => ({
                label: `${p.id} - ${p.title}`,
                value: p.id,
            }));
            setOptions(formatted);
        });
    }, []);

    return (
        <Select
            mode="multiple"
            showSearch
            placeholder="Seleccione problemas"
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

export default SelectProblems;
