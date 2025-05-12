import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import MainLayout from '../layouts/MainLayout';
import ProtectedRoute from '../components/ProtectedRoute';
import Configurations from '../pages/Configurations';
import Incidents from '../pages/Incidents';
import Changes from '../pages/Changes';
import Problems from '../pages/Problems';
import ConfigurationsNew from '../pages/ConfigurationsNew';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<MainLayout />}>
                <Route path="/" element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                } />
                <Route path="/configurations" element={
                    <ProtectedRoute>
                        <Configurations />
                    </ProtectedRoute>
                } />
                <Route path="/configurations/new" element={
                    <ProtectedRoute>
                        <ConfigurationsNew />
                    </ProtectedRoute>
                } />
                <Route path="/incidents" element={
                    <ProtectedRoute>
                        <Incidents />
                    </ProtectedRoute>
                } />
                <Route path="/changes" element={
                    <ProtectedRoute>
                        <Changes />
                    </ProtectedRoute>
                } />
                <Route path="/problems" element={
                    <ProtectedRoute>
                        <Problems />
                    </ProtectedRoute>
                } />
            </Route>
        </Routes>
    );
}

export default AppRoutes

