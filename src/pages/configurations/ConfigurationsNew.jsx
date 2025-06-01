import { Form } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { createConfigItem } from '../../api/configuration';
import ConfigurationForm from './ConfigurationForm';

const ConfigurationsNew = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const { user } = useAuth();

    const handleSubmit = (values) => {
        createConfigItem(
            {
                title: values.title,
                description: values.description,
                userId: user.id,
                versionId: "0",
                versionHistory: "0"
            }
        )
            .then(() => {
                navigate('/configurations');
            })
            .catch((error) => {
                console.error('Error creating configuration item:', error);
            });
    };

    return (
        <>
            <h1>Crear Item de Configuración</h1>
            <ConfigurationForm form={form} onFinish={handleSubmit} />
        </>
    );
};

export default ConfigurationsNew;
