import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import MainLayout from '../layouts/MainLayout';
import ProtectedRoute from '../components/ProtectedRoute';
import Configurations from '../pages/Configurations';
import Changes from '../pages/Changes';
import Problems from '../pages/Problems';
import ConfigurationsNew from '../pages/ConfigurationsNew';
import ProblemsNew from '../pages/ProblemsNew';
import ChangesNew from '../pages/ChangesNew';
import ConfigurationsDetail from '../pages/ConfigurationsDetail';
import Incidents from '../pages/incidents/Incidents';
import IncidentNew from '../pages/incidents/IncidentNew';
import IncidentDetail from '../pages/incidents/IncidentDetail';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={
                <ProtectedRoute>
                    <MainLayout />
                </ProtectedRoute>
            }>
                <Route path="/" element={<Home />} />
                <Route path="/configurations" element={<Configurations />} />
                <Route path="/configurations/:id" element={<ConfigurationsDetail />} />
                <Route path="/configurations/new" element={<ConfigurationsNew />} />
                <Route path="/incidents" element={<Incidents />} />
                <Route path="/incidents/new" element={<IncidentNew />} />
                <Route path="/incidents/:id" element={<IncidentDetail />} />
                <Route path="/changes" element={<Changes />} />
                <Route path="/changes/new" element={<ChangesNew />} />
                <Route path="/problems" element={<Problems />} />
                <Route path="/problems/new" element={<ProblemsNew />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes

