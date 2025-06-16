import { Form } from 'antd';
import { useNavigate } from 'react-router-dom';
import ChangeForm from './ChangeForm';
import { createChange } from '../../api/change';
import { useAuth } from '../../context/AuthContext';

const ChangesNew = () => {
    const [form] = Form.useForm();
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        createChange({
            ...values,
            userId: user.id,
            createdDate: new Date().toISOString(),
        })
            .then(() => navigate('/changes'))
            .catch(console.error);
    };


    return (
        <div>
            <h1>Crear Petición de Cambio</h1>
            <ChangeForm form={form} onFinish={handleSubmit} creating={true} />
        </div>
    );
};

export default ChangesNew;
