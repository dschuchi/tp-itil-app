import { Button, Form, Input, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { createIncident } from '../../api/incident';
import SelectConfigItem from '../../components/SelectConfigItem';
import SelectAssignedUser from '../../components/SelectAssignedUser';
import IncidentForm from './IncidentForm';

const { TextArea } = Input;

const IncidentsNew = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const { user } = useAuth();

    const handleSubmit = (values) => {
        createIncident(
            {
                ...values,
                userId: user.id,
            }
        )
            .then(() => {
                navigate('/incidents');
            })
            .catch((error) => {
                console.error('Error creating incident:', error);
            });
    };

    return (
      <IncidentForm form={form} onFinish={handleSubmit} />
    );
};

export default IncidentsNew;