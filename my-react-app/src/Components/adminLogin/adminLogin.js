import React from "react";
import { useNavigate } from 'react-router-dom';
import "./adminLogin.css"

const Loginform = () => {
    const navigate = useNavigate();
    return (

        <div className="containers">
            <div className="cover">
                <div className="top">
                    <text className="admin-text">ADMIN LOGIN</text>
                </div>
                <div className="texts">
                    <label style={{ fontSize: 18 }}>Username:</label>
                </div>
                <div className="email">
                    <input className='user-input' type='text' placeholder='Enter your name' />
                </div>
                <div className="texts" style={{marginTop: 30}}>
                    <label style={{ fontSize: 18 }}>Password:</label>
                </div>
                <input className='user-input' type='text' placeholder='Enter your password' />
                <div className="btn-container">
                    <div className='login-button'>
                        <p style={{ fontSize: 18, fontWeight: "bold" }} onClick={() => navigate('/dashboard')}>LOGIN</p>
                    </div>
                </div>
                <div className="bot">
                    <p>Forgot Password?</p>
                </div>
            </div>
        </div>
    )
}
export default Loginform;