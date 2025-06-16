import { Button, Select } from "antd";
import { useEffect, useState } from "react";
import { postChangeRelatedProblem } from "../api/change";
import { getProblems } from "../api/problem";

const AddProblem = ({ id, loadProblems, problems }) => {
    const [options, setOptions] = useState([]);
    const [selectedId, setSelectedId] = useState(null);

    const loadOptions = () => {
        const problemsToFilter = new Set(problems.map(i => i.id));
        getProblems()
            .then(data => {
                const formatted = data
                    .filter(i => !problemsToFilter.has(i.id))
                    .map(i => ({
                        label: `${i.id} - ${i.title}`,
                        value: i.id,
                    }));
                setOptions(formatted);
            });
    }

    useEffect(() => {
        loadOptions()
    }, [problems]);

    const handleAdd = () => {
        if (!selectedId) return;
        postChangeRelatedProblem(id, selectedId)
            .then(() => {
                setSelectedId(null)
                loadProblems()
            })
            .catch(console.error)
    };

    return (
        <>
            <Select
                style={{ width: 300 }}
                options={options}
                value={selectedId}
                onChange={setSelectedId}
                placeholder="Seleccione un incidente"
            />
            <Button onClick={handleAdd} disabled={!selectedId}>
                +
            </Button>
        </>
    );
};

export default AddProblem;
