import React from "react";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './adminDashboard.css'
const AdminDashboard = () => {

    return (
        <div style={{ display: 'flex', justifyContent: "center" }}>
            <div style={{ display: "flex" }}>
                <div className="Left-container">
                    <div className="image-container">
                        <img />
                    </div>
                    <div className="details-container">
                        <div style={{ backgroundColor: "#D9D9D9" }} className="item-details">
                            <p className="text-item">Name:</p>
                            <p className="text-item2">Coca-cola</p>
                        </div >
                        <div style={{ backgroundColor: "#F5F2E9" }} className="item-details">
                            <p className="text-item">Price:</p>
                            <p className="text-item2">50</p>
                        </div>
                        <div style={{ backgroundColor: "#D9D9D9" }} className="item-details">
                            <p className="text-item">Stocks</p>
                            <p className="text-item2">25pcs</p>
                        </div>
                    </div>
                    <div className="buttons">
                        <div>
                            <p className="edit-item">
                                Edit
                            </p>
                        </div>
                        <div>
                            <p className="remove-item">
                                Remove
                            </p>
                        </div>
                    </div>
                </div>
                <div className="right-container">
                    <div className="right-header">
                        <div className="cathegory-pop-up">
                            <p>
                                Cathegory
                            </p>
                        </div>
                        <div className="search-bar">
                            <p>
                                Search
                            </p>
                        </div>
                        <div className="add-button">
                            <GoPlus />
                        </div>
                    </div>
                    <div style={{  }}>
                        <p>
                            Cathegory Name
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AdminDashboard;