import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ForgotPassword extends Component {
    confirm(e) {
        this.props.history.push('/confirm');
    }
    
    render() {
        return (
            <div className="form-signin text-center" style={{background: "linear-gradient(to bottom left, #3c817a, #19033d)", display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <form style={{width: '500px', background: 'white', borderRadius: '20px'}} onSubmit={(e) => this.confirm(e)}>
                    <div className="p-5">
                        <h1 className="h3 mb-3 fw-normal">Forgot Password</h1>
                        <div className="form-floating">
                            <input type="email" className="form-control" placeholder="Email"/>
                            <label>Email address</label>
                        </div>
                        <div className="mt-3">
                            <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
                        </div>
                        <div className="mt-5">
                            <span className="me-2">Don't have an account?</span>
                            <Link style={{textDecoration: 'none'}} to="/register">Register</Link>
                        </div>
                    </div>
                </form>                    
            </div>
        )
    }
}
