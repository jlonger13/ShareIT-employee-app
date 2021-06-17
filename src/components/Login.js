import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import img1 from '../img/shareit_logo_2021.png';

export default class Login extends Component {
    render() {
        return (
            <div className="form-signin text-center" style={{background: "linear-gradient(to bottom left, #3c817a, #19033d)", display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <form style={{width: '500px', background: 'white', borderRadius: '20px'}}>
                    <div className="p-5">
                        <img src={img1} alt="Logo" style={{width: '170px'}} className="mb-3"/>
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                        <div className="form-floating">
                            <input type="email" className="form-control" placeholder="Email"/>
                            <label>Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" placeholder="Password"/>
                            <label>Password</label>
                        </div>
                        <div className="mt-1">
                            <Link style={{textDecoration: 'none', display: 'flex', flexDirection:'row-reverse' }} to="/forgot">Forgot Password?</Link>
                        </div>
                        <div className="mt-3"> 
                            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
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
