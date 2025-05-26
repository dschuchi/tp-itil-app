import { useNavigate } from 'react-router-dom';
import ProblemForm from './ProblemForm';
import { useAuth } from '../../context/AuthContext';
import { createProblem } from '../../api/problem';

const ProblemsNew = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        createProblem({
            ...values,
            userId: user.id
        }).then(() => navigate('/problems'));
    };

    return (
        <div>
            <h1>Crear Problema</h1>
            <ProblemForm onFinish={handleSubmit} />
        </div>
    );
};

export default ProblemsNew;
