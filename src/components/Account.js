import React, { Component } from 'react';

export default class Account extends Component {
    render() {
        return (
            <div className="container mb-3" style={{width: "90%"}}>
                <div className="row">
                    <div className="col-1 text-center">Picture</div>
                    <div className="col">
                        <h1>Name</h1>
                        <h2>Position</h2>
                    </div>
                </div>

                <div>
                    Personal Info | Professional Info | Days Off | Account
                </div>

                <div style={{backgroundColor: "white"}}>
                    <h3>Identity</h3>
                    <div className="form-card mb-3">
                        <p>Full name: </p>
                        <p>Birth date: </p>
                        <p>Marital Status: </p>
                        <p>Nationality: </p>
                    </div>

                    <h3>Contact Information</h3>
                    <div className="form-card mb-3">
                        <p>Email: </p>
                        <p>Phone number: </p>
                        <p>Address: </p>
                        <p>Name: </p>
                    </div>

                    <h3>Emergency Contact</h3>
                    <div className="form-card mb-3">
                        <p>Phone number: </p>
                        <p>Relationship:</p>
                    </div>

                    <h3>Identification</h3>
                    <div className="form-card mb-3">
                        <p>ID Number: </p>
                        <p>Tax identification number: </p>
                        <p>SSN: </p>
                        <p>Driving license number: </p>
                        <p>Car number plate: </p>
                    </div>

                    <h3>Tax Information</h3>
                    <div className="form-card mb-3">
                        <p>Dependents: </p>
                        <p>Handicap: </p>
                        <p>Income Payee: </p>
                    </div>

                    <h3>Education</h3>
                    <div className="form-card mb-3">
                        <p>Degree: </p>
                        <p>Course: </p>
                        <p>School: </p>
                    </div>

                    <h3>Bank Information</h3>
                    <div className="form-card mb-3">
                        <p>Bank: </p>
                        <p>Iban: </p>
                        <p>Swift: </p>
                    </div>
                </div>
            </div>
        )
    }
}
