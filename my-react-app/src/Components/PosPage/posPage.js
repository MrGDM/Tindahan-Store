import React from "react";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./posPage.css"



const PosPage = () => {
    const navigate = useNavigate();
    return (
        <div className="container">
            <div className="login-container">
                <div className="topcontainer">
                    <p style={{}}>POS LOGIN</p>
                </div>
                <div className="cashier" style={{cursor: 'pointer'}} onClick={() => navigate('/cashier')}>
                    <p style={{marginTop:5}}>Cashier</p>
                </div>
                <div className="admin" style={{cursor: 'pointer'}} onClick={() => navigate('/dashboard')}>
                    <p style={{marginTop:5}}>Admin</p>
                </div>
            </div>
        </div>

    )
}
export default PosPage;