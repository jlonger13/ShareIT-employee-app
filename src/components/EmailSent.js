import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class EmailSent extends Component {
    render() {
        return (
            <div style={{background: "linear-gradient(to bottom left, #3c817a, #19033d)", display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <div style={{width: '500px', height: '339px', background: 'white', borderRadius: '20px', display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <div className="p-5">
                        <div className="mb-3">A temporary passcode has been sent to your email address. Please make sure to reset your passcode.</div>
                        <Link style={{textDecoration: 'none'}} to="/login">Go back to log-in</Link>
                    </div>
                </div>                    
            </div>
        )
    }
}
