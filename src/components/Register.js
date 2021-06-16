import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom";

import StepProgressBar from "./registerForm/StepProgressBar";
import AccountSetup from "./registerForm/AccountSetup";
import PersonalInformation from "./registerForm/PersonalInformation";
import EmergencyContact from "./registerForm/EmergencyContact";
import Identification from "./registerForm/Identification";
import Education from "./registerForm/Education";
import BankInfo from "./registerForm/BankInfo";
import Confirmation from "./registerForm/Confirmation";

import Firebase from "../firebase/Firebase";

import "./Register.css";

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.auth = Firebase.getInstance().auth;
        this.state = {
            step: 1,
            gradient: "linear-gradient(to right, #87CEEB 10%, lightgray 10%)",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            civilState: "",
            nationality: "",
            personalEmail: "",
            id: "",
            taxId: "",
            ssn: "",
            licenseNum: "",
            carPlateNum: "",
            contact1: "",
            contact2: "",
            courses: [],
            bank: "",
            iban: "",
            swift: ""
        }
    }

    nextStep() {
        const currentStep = this.state.step;
        const percent = currentStep*16 + 10;

        this.setState({
            step: currentStep + 1,
            gradient: "linear-gradient(to right, #87CEEB " + percent + "%, lightgray " + percent + "%)"
        })
        console.log(this.state);
    }

    prevStep() {
        const currentStep = this.state.step;
        const percent = (currentStep-2)*16 + 10;

        this.setState({
            step: currentStep - 1,
            gradient: "linear-gradient(to right, #87CEEB " + percent + "%, lightgray " + percent + "%)"
        })
    }

    getStep() {
        switch(this.state.step) {
            case 1:
                return (
                    <AccountSetup onNext={() => this.nextStep()} updateInfo={
                        (firstName, lastName, email, password) => this.updateAccountInfo(firstName, lastName, email, password)
                    }/>
                );
            case 2:
                return (
                    <PersonalInformation onNext={() => this.nextStep()} onPrev={() => this.prevStep()} updateInfo={
                        (civilState, nationality, email) => this.updatePersonalInfo(civilState, nationality, email)
                    }/>
                );
            case 3:
                return (
                    <EmergencyContact onNext={() => this.nextStep()} onPrev={() => this.prevStep()} updateInfo={
                        (civilState, nationality, email) => this.updatePersonalInfo(civilState, nationality, email)
                    }/>
                );
            case 4:
                return (
                    <Identification onNext={() => this.nextStep()} onPrev={() => this.prevStep()} updateInfo={
                        (civilState, nationality, email) => this.updatePersonalInfo(civilState, nationality, email)
                    }/>
                );
            case 5:
                return (
                    <Education onNext={() => this.nextStep()} onPrev={() => this.prevStep()} updateInfo={
                        (civilState, nationality, email) => this.updatePersonalInfo(civilState, nationality, email)
                    }/>
                );
            case 6:
                return (
                    <BankInfo onPrev={() => this.prevStep()} updateInfo={
                        (civilState, nationality, email) => this.updatePersonalInfo(civilState, nationality, email)
                    }/>
                );
            case 7: 
                return (
                    <Confirmation onPrev={() => this.prevStep()} onSubmit={() => this.createUser()}/>
                )
            default: 
                break;
        }
    }

    updateAccountInfo(firstName, lastName, email, password) {
        this.setState({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        })
        console.log(this.state);
    }

    updatePersonalInfo(civilState, nationality, email) {
        this.setState({
            civilState: civilState,
            nationality: nationality,
            personalEmail: email,
        })
    }

    updateIdentification(id, taxId, ssn, licenseNum, carPlate) {
        this.setState({
            id: id,
            taxId: taxId,
            ssn: ssn,
            licenseNum: licenseNum,
            carPlateNum: carPlate
        })
    }

    updateEmergencyContacts(contact1, contact2) {
        this.setState({
            contact1: contact1,
            contact2: contact2
        })
    }

    updateEducation() {
        this.setState({
        })
    }

    updateBankInfo(bank, iban, swift) {
        this.setState({
            bank: bank,
            iban: iban, 
            swift: swift
        })
    }

    async createUser() {
        try {
            this.auth.createUserWithEmailAndPassword(this.state.email, this.state.password);
        } catch(err) {
            console.log(err);
        }
    }

    render() {
        return (
            <div className="container my-3">
                <div className="card">
                    <div className="card-body">
                        <div className="text-center">
                            <h1 className="unbold">Create your account</h1>
                            <p>Fill in all fields to move to next step</p>
                        </div>

                        <div className="text-center">
                        <StepProgressBar step={this.state.step} gradient={this.state.gradient}/>
                        </div>

                        <div className="form-card mb-3">
                            {this.getStep()}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
