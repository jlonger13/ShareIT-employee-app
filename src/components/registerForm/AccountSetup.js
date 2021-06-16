import React, { Component } from 'react'

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

    nextAndUpdate(firstName, lastName, email, password) {
        this.props.updateInfo(firstName, lastName, email, password);
        // this.props.onNext();
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



    render() {
        return (
            <form className="row">
                <h2>Account Setup</h2>
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
                    <button type="button" onClick={() => this.nextAndUpdate(this.state.firstName, this.state.lastName, this.state.email, this.state.password)} className="btn btn-primary sharp">Next</button>
                </div>
            </form>
        )
    }
}
