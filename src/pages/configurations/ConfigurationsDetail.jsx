import { useParams } from "react-router-dom";
import { Empty, Form, List } from "antd";
import { getConfigItem } from "../../api/configuration";
import { useEffect, useState } from "react";
import ConfigurationForm from "./ConfigurationForm";

const ConfigurationsDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [form] = Form.useForm();

    useEffect(() => {
        getConfigItem(id)
            .then(data => {
                setItem(data);
                form.setFieldsValue(data);
            })
            .catch(err => {
                console.error('Error al cargar el item de configuración.', err);
            })
    }, [id]);

    if (!item) return <p>No hay datos para mostrar.</p>;

    return (
        <div>
            <ConfigurationForm form={form} disabled={true} submitButton={false} />

            <h3>Incidentes relacionados</h3>
            <List
                dataSource={item.incidents || []}
                locale={<Empty />}
                renderItem={incident => (
                    <List.Item>
                        <List.Item.Meta
                            title={incident.title}
                            description={incident.description}
                        />
                    </List.Item>
                )}
            />
        </div>
    );
};

export default ConfigurationsDetail;