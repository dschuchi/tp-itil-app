import { useParams } from "react-router-dom";
import { Empty, Form, List } from "antd";
import { getConfigItem, getConfigItemIncidents } from "../../api/configuration";
import { useEffect, useState } from "react";
import ConfigurationForm from "./ConfigurationForm";

const ConfigurationsDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [history, setHistory] = useState([])
    const [incidents, setIncidents] = useState([])
    const [form] = Form.useForm();

    useEffect(() => {
        getConfigItem(id)
            .then(data => {
                setItem(data);
                form.setFieldsValue(data);
                const parsed = Object.values(JSON.parse(data.versionHistory)).map((item, i) => {
                    const [tituloPart, descripcionPart] = item.split("|");
                    return {
                        id: i+1,
                        titulo: tituloPart.replace("Titulo:", "").trim(),
                        descripcion: descripcionPart.replace("Descripcion:", "").trim(),
                    };
                });
                setHistory(parsed.reverse());
            })
            .catch(err => {
                console.error('Error al cargar el item de configuración.', err);
            })
    }, [id]);

    useEffect(() => {
        getConfigItemIncidents(id)
            .then(setIncidents)
            .catch(console.error)
    }, []);

    if (!item) return <p>No hay datos para mostrar.</p>;

    return (
        <div>
            <ConfigurationForm form={form} disabled={true} submitButton={false} />

            <h3>Incidentes relacionados</h3>
            <List
                dataSource={incidents}
                locale={<Empty />}
                renderItem={incident => (
                    <List.Item>
                        {incident.id} - {incident.title}
                    </List.Item>
                )}
            />


            <h3>Historial de cambios</h3>
            <List
                dataSource={history}
                locale={<Empty />}
                renderItem={h => (
                    <List.Item>
                        {h.id} - Titulo: {h.titulo} - Descripción: {h.descripcion}
                    </List.Item>
                )}
            />

        </div>
    );
};

export default ConfigurationsDetail;