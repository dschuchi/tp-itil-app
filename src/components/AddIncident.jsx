import { Button, Select } from "antd";
import { useEffect, useState } from "react";
import { getIncidents } from "../api/incident";

const AddIncident = ({ id, loadIncidents, add, incidents }) => {
    const [options, setOptions] = useState([]);
    const [selectedId, setSelectedId] = useState(null);

    const loadOptions = () => {
        const incidentsToFilter = new Set(incidents.map(i => i.id));
        getIncidents().then(data => {
            const formatted = data
                .filter(i => !incidentsToFilter.has(i.id))
                .map(i => ({
                    label: `${i.id} - ${i.title}`,
                    value: i.id,
                }));
            setOptions(formatted);
        });
    }

    useEffect(() => {
        loadOptions()
    }, [incidents]);

    const handleAdd = () => {
        if (!selectedId) return;
        add(id, selectedId)
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
