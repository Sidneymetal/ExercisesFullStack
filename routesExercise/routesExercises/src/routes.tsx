import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
}

export default MainRoutes;