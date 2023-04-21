import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { IoMenuOutline } from "react-icons/io5";
import { BsBox, BsClock, BsChevronDown } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci"
import { HiOutlineUserCircle } from "react-icons/hi"

import './topBar.css'

const Topbar = () => {

    const navigate = useNavigate()
    const [dropDown, setDropDown] = useState(false)
    const [sm, setSm] = useState({ mo: false, cp: false })
    const leaving = () => setSm({ mo: false, cp: false, th: false, tr: false, se: false })
    return (
        <div className="topbar">
            <div className="admin-button" onClick={() => {
                setDropDown((prev) => {
                    if (prev) {
                        return false
                    }
                    else {
                        return true
                    }
                })
            }}>
                <div style={{ display: "flex"}}>
                    <IoMenuOutline size={33} color='white' style={{ cursor: 'pointer', marginRight: 10 }} />
                    <p style={{ color: "white", marginTop: 3, fontSize: 25}}>Tindahan</p>
                </div>
                {dropDown && (<div className='drop-down-admin'>
                    <div>
                        <div className="usericon">
                            <HiOutlineUserCircle size={35} />
                        </div>
                        <div className='selection-div' style={{ backgroundColor: sm.mo ? '#444444' : '#FBFBFB', cursor: 'pointer' }} onMouseEnter={() => setSm({ mo: true, cp: false })} onMouseLeave={leaving} onClick={() => { navigate('/sales'); setDropDown(false); }}>
                            <RxDashboard color={sm.mo ? '#FFFFFF' : '#626262'} size={28} style={{ marginLeft: 25 }} />
                            <p style={{ color: sm.mo ? '#FFFFFF' : '#626262', fontWeight: 500, fontSize: 16, marginLeft: 20 }}>Dashboard</p>
                        </div>
                        <div className='selection-div' style={{ backgroundColor: sm.cp ? '#444444' : '#FBFBFB', cursor: 'pointer' }} onMouseEnter={() => setSm({ mo: false, cp: true })} onMouseLeave={leaving}>
                            <BsBox color={sm.cp ? '#FFFFFF' : '#626262'} size={28} style={{ marginLeft: 25 }} />
                            <p style={{ color: sm.cp ? '#FFFFFF' : '#626262', fontWeight: 500, fontSize: 16, marginLeft: 20 }}>Products</p>
                        </div>
                        <div className='selection-div' style={{ backgroundColor: sm.th ? '#444444' : '#FBFBFB', cursor: 'pointer' }} onMouseEnter={() => setSm({ cp: false, th: true })} onMouseLeave={leaving} >
                            <IoMdNotificationsOutline color={sm.th ? '#FFFFFF' : '#626262'} size={28} style={{ marginLeft: 25 }} />
                            <p style={{ color: sm.th ? '#FFFFFF' : '#626262', fontWeight: 500, fontSize: 16, marginLeft: 20 }}>Notifications</p>
                        </div>
                        <div className='selection-div' style={{ backgroundColor: sm.tr ? '#444444' : '#FBFBFB', cursor: 'pointer' }} onMouseEnter={() => setSm({ th: false, tr: true })} onMouseLeave={leaving} >
                            <BsClock color={sm.tr ? '#FFFFFF' : '#626262'} size={28} style={{ marginLeft: 25 }} />
                            <p style={{ color: sm.tr ? '#FFFFFF' : '#626262', fontWeight: 500, fontSize: 16, marginLeft: 20 }}>Transactions</p>
                        </div>
                        <div className='selection-div' style={{ backgroundColor: sm.se ? '#444444' : '#FBFBFB', cursor: 'pointer' }} onMouseEnter={() => setSm({ tr: false, se: true })} onMouseLeave={leaving} >
                            <CiSettings color={sm.se ? '#FFFFFF' : '#626262'} size={28} style={{ marginLeft: 25 }} />
                            <p style={{ color: sm.se ? '#FFFFFF' : '#626262', fontWeight: 500, fontSize: 16, marginLeft: 20 }}>Settings</p>
                        </div>
                    </div>

                </div>
                )}
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <p style={{ fontSize: 23, color: 'white' }}>Admin</p>
                <BsChevronDown color="white" size={25} style={{ marginRight: 15, marginLeft: 5 }} />
                <HiOutlineUserCircle color="white" size={25} style={{}} />
            </div>
        </div>
    )
}

export default Topbar;