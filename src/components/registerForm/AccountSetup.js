import React, { Component } from 'react'

import Profile from "../../models/Profile";

export default class AccountSetup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        }
    }

    onFirstNameChanged(e) {
        this.setState({
            firstName: e.target.value
        })
    }

    onLastNameChanged(e) {
        this.setState({
            lastName: e.target.value
        })
    }

    onEmailChanged(e) {
        this.setState({
            email: e.target.value
        })
    }

    onPasswordChanged(e) {
        this.setState({
            password: e.target.value
        })
    }

    async createUser() {
        try {
            const userCredential = await this.auth.createUserWithEmailAndPassword(this.state.email, this.state.password);
            console.log(userCredential);
            const user = new Profile(this.state.id, this.state.firstName, this.state.lastName);
        } catch(err) {
            console.log(err);
        }
    }

    render() {
        return (
            <form className="row">
                <h2>Account Information</h2>
                <div className="col-6 mb-3">
                    <label className="form-label">First Name</label>
                    <input onChange={(e) => this.onFirstNameChanged(e)} type="text" className="form-control"/>
                </div>
                <div className="col-6 mb-3">
                    <label className="form-label">Last Name</label>
                    <input onChange={(e) => this.onLastNameChanged(e)} type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input  onChange={(e) => this.onEmailChanged(e)} type="email" className="form-control" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Password</label>
                    <input onChange={(e) => this.onPasswordChanged(e)} type="password" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Confirm Password</label>
                    <input type="password" className="form-control"/>
                </div>
                <div className="text-center">
                    <button type="button" onClick={() => this.props.signUp()} className="btn btn-primary sharp">Submit</button>
                </div>
            </form>
        )
    }
}
