import React from "react";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './cashierDasboard.css'
const cashierDasboard = () => {

    return (
        <div style={{ display: 'flex', justifyContent: "center" }}>
            <div style={{ display: "flex" }}>
                <div className="L-container">
                    <div className="img-container">
                        <div className="bttn">
                            <div>
                                <p className="button1">
                                    Canned Goods
                                </p>
                            </div>
                            <div>
                                <p className="button1">
                                    Beverage
                                </p>
                            </div>
                            <div>
                                <p className="button1">
                                    Toiletries
                                </p>
                            </div>
                            <div>
                                <p className="button1">
                                    JunkFoods
                                </p>
                            </div>
                        </div>
                        <div className="bttn2">
                            <div>
                                <p className="button2">
                                    School Supplies
                                </p>
                            </div>
                            <div>
                                <p className="button2">
                                    Rice
                                </p>
                            </div>
                            <div>
                                <p className="button2">
                                    Candies
                                </p>
                            </div>
                            <div>
                                <p className="button2">
                                    JunkFoods
                                </p>
                            </div>
                        </div>
                    </div>             
                </div>
                <div className="r-container">
                    <div className="images-container">
                        <div className="txt">
                            <p className="text-item2">Total:</p>
                            <p className="text-item2">Tendered:</p>
                            <p className="text-item2">Change:</p>
                        </div>
                    </div>

                    <div className="dtls-container">
                        <div style={{ backgroundColor: "#D9D9D9" }} className="item-details">
                            <p className="text-item2"></p>
                        </div >
                        <div style={{ backgroundColor: "#F5F2E9" }} className="item-details">

                            <p className="text-item2"></p>
                        </div>
                        <div style={{ backgroundColor: "#D9D9D9" }} className="item-details">

                            <p className="text-item2"></p>
                        </div>
                    </div>
                    
                    <div className="btn">
                        <div>
                            <p className="finish">
                                Finish
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default cashierDasboard;
