import { Button, Select } from "antd";
import { useEffect, useState } from "react";
import { getIncidents } from "../api/incident";
import { useAuth } from "../context/AuthContext";
import { hasEditingPermission } from "../service/permissionService";

const AddIncident = ({ id, loadIncidents, add, incidents }) => {
    const [options, setOptions] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const { user } = useAuth()

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
                disabled={!hasEditingPermission(user)}
                style={{ width: 300 }}
                options={options}
                value={selectedId}
                onChange={setSelectedId}
                placeholder="Seleccione un incidente"
            />
            <Button onClick={handleAdd} disabled={!selectedId || !hasEditingPermission(user)}>
                +
            </Button>
        </>
    );
};

export default AddIncident;
