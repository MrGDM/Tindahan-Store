import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from './Components/adminDashboard/adminDashboard';
import PosPage from './Components/PosPage/posPage';
import Topbar from './Components/TopBar/topBar';

const NotPage = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ marginTop: -58 }}>
        <p style={{ color: '#B85151', fontSize: 30, fontWeight: 700 }}>PAGE NOT FOUND</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="*" element={<NotPage />} />
        <Route path="/" element={<PosPage />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

export default App;
