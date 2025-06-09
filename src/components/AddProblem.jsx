import { Button, Select } from "antd";
import { useEffect, useState } from "react";
import { postChangeRelatedProblem } from "../api/change";
import { getProblems } from "../api/problem";

const AddProblem = ({ id, loadProblems }) => {
    const [options, setOptions] = useState([]);
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        getProblems().then(data => {
            const formatted = data.map(i => ({
                label: `${i.id} - ${i.title}`,
                value: i.id,
            }));
            setOptions(formatted);
        });
    }, []);

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
