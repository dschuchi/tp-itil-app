import { Button, Select } from "antd";
import { useEffect, useState } from "react";
import { getIncidents } from "../api/incident";
import { postChangeRelatedIncident } from "../api/change";

const AddIncident = ({ id, loadIncidents }) => {
    const [options, setOptions] = useState([]);
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        getIncidents().then(data => {
            const formatted = data.map(i => ({
                label: `${i.id} - ${i.title}`,
                value: i.id,
            }));
            setOptions(formatted);
        });
    }, []);

    const handleAdd = () => {
        if (!selectedId) return;
        postChangeRelatedIncident(id, selectedId)
            .then(() => {
                setSelectedId(null)
                loadIncidents()
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

export default AddIncident;
