import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div className="form-signin text-center" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <form style={{width: '300px'}}>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <div className="form-floating">
                        <input type="email" className="form-control" placeholder="Email"/>
                        <label>Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" placeholder="Password"/>
                        <label>Password</label>
                    </div>
                    <div className="mt-3">
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    </div>
                </form>                    
            </div>
        )
    }
}
