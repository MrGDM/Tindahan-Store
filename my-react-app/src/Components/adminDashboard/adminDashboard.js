import React from "react";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { MdAddBox } from 'react-icons/md'
import './adminDashboard.css'
const AdminDashboard = () => {



    const [items, setItems] = useState([
        {
            price: 50,
            itemName: 'Kaldereta'
        },
        {
            price: 50,
            itemName: 'Kaldereta'
        },
        {
            price: 50,
            itemName: 'Kaldereta'
        },
        {
            price: 50,
            itemName: 'Kaldereta'
        },
        {
            price: 50,
            itemName: 'Kaldereta'
        },
        {
            price: 50,
            itemName: 'Kaldereta'
        },
        {
            price: 50,
            itemName: 'Kaldereta'
        },
        {
            price: 50,
            itemName: 'Kaldereta'
        },
        {
            price: 50,
            itemName: 'Kaldereta'
        },
        {
            price: 50,
            itemName: 'Kaldereta'
        },
        {
            price: 50,
            itemName: 'Kaldereta'
        },
        {
            price: 50,
            itemName: 'Kaldereta'
        },
        {
            price: 50,
            itemName: 'Kaldereta'
        },
        {
            price: 50,
            itemName: 'Kaldereta'
        },

        {
            price: 50,
            itemName: 'Kaldereta'
        },

        {
            price: 50,
            itemName: 'Kaldereta'
        },

        {
            price: 50,
            itemName: 'Kaldereta'
        },
    ])

    const [contextMenuPos, setContextMenuPos] = useState({ x: 0, y: 0 })
    const [isContextMenu, setIsContextMenu] = useState(false)















    return (
        <div style={{ display: 'flex', justifyContent: "center" }}>
            <div style={{ display: "flex" }}>
                <div className="Left-container">
                    <div className="image-container">
                        <img style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: 10}} src={'./Coke.jpg'}/>
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
                    <div style={{}}>
                        <p style={{ fontSize: 25, fontWeight: "bold" }}>
                            Softdrinks
                        </p>
                    </div>
                    <ul className='item-container'>
                        {items.map((item, index) => {
                            return (
                                <li key={index} className='items' onContextMenu={(e) => {
                                    e.preventDefault()
                                    setContextMenuPos({ x: e.pageX, y: e.pageY })
                                    setIsContextMenu(true)
                                }}>
                                    <img style={{ width: '40%', height: '60%', objectFit: 'cover', marginTop: 25}} src={'./Coke.jpg'} />
                                    <div className='price-container' style={{ backgroundColor: '#D9D9D9' }}>
                                        <div style={{ display: "flex", justifyContent: "center", marginBottom: 10 }}>
                                            <p style={{ fontSize: 18, color: 'black', fontWeight: 700, position: "absolute", marginRight: 60 }} >Name:</p>
                                            <p style={{ fontSize: 18, color: 'black', fontWeight: 700, marginLeft: 60 }} >Clover</p>
                                        </div>
                                        <div style={{ display: "flex", justifyContent: "center", marginBottom: 10 }}>
                                            <p style={{ fontSize: 18, color: 'black', fontWeight: 700, position: "absolute", marginRight: 60  }} >Price:</p>
                                            <p style={{ fontSize: 18, color: 'black', fontWeight: 700, marginLeft: 60 }} >30</p>
                                        </div>
                                        <div style={{ display: "flex", justifyContent: "center", marginBottom: 10 }}>
                                            <p style={{ fontSize: 18, color: 'black', fontWeight: 700, position: "absolute", marginRight: 60  }} >Size:</p>
                                            <p style={{ fontSize: 18, color: 'black', fontWeight: 700, marginLeft: 60 }} >55g</p>
                                        </div>
                                    </div>
                                    <div className='name-container' style={{ backgroundColor: '#93BFCF' }}>
                                        <p style={{ fontSize: 18, color: 'black', fontWeight: 600 }}>Select</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard;