import React, { Component } from 'react';
import "./Account.css";

export default class Account extends Component {
    render() {
        return (
            <div className="pb-3">
                <div className="stripe"></div>
                
                <div className="container mb-3" style={{width: "90%"}}>
                    <div className="row">
                        <div className="col-1 text-center">Picture</div>
                        <div className="col">
                            <h1>Name</h1>
                            <h2>Position</h2>
                        </div>
                    </div>
                </div>

                <div style={{padding: "0px 0px 0px 76px"}}>
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <p className="nav-link active">Personal Info</p>
                        </li>
                        <li class="nav-item">
                            <p className="nav-link">Professional Info</p>
                        </li>
                        <li class="nav-item">
                            <p className="nav-link">Days Off</p>
                        </li>
                        <li class="nav-item">
                            <p className="nav-link">Account</p>
                        </li>
                    </ul>
                </div>

                <div href="personal-info">
                    <div className="form-card" style={{backgroundColor: "white"}}>
                        <h3 className="info-header mx-4">IDENTITY</h3>
                        <div className="mx-4 mb-3">
                            <p>Full name: </p>
                            <p>Birth date: </p>
                            <p>Marital Status: </p>
                            <p>Nationality: </p>
                            <hr/>
                        </div>

                        <h3 className="info-header mx-4">CONTACT INFORMATION</h3>
                        <div className="mx-4 mb-3">
                            <p>Email: </p>
                            <p>Phone number: </p>
                            <p>Address: </p>
                            <p>Name: </p>
                            <hr/>
                        </div>

                        <h3 className="info-header mx-4">EMERGENCY CONTACT</h3>
                        <div className="mx-4 mb-3">
                            <p>Phone number: </p>
                            <p>Relationship:</p>
                            <hr/>
                        </div>

                        <h3 className="info-header mx-4">IDENTIFICATION</h3>
                        <div className="mx-4 mb-3">
                            <p>ID Number: </p>
                            <p>Tax identification number: </p>
                            <p>SSN: </p>
                            <p>Driving license number: </p>
                            <p>Car number plate: </p>
                            <hr/>
                        </div>

                        <h3 className="info-header mx-4">TAX INFORMATION</h3>
                        <div className="mx-4 mb-3">
                            <p>Dependents: </p>
                            <p>Handicap: </p>
                            <p>Income Payee: </p>
                            <hr/>
                        </div>

                        <h3 className="info-header mx-4">EDUCATION</h3>
                        <div className="mx-4 mb-3">
                            <p>Degree: </p>
                            <p>Course: </p>
                            <p>School: </p>
                            <hr/>
                        </div>

                        <h3 className="info-header mx-4">BANK INFORMATION</h3>
                        <div className="mx-4 mb-3">
                            <p>Bank: </p>
                            <p>Iban: </p>
                            <p>Swift: </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
