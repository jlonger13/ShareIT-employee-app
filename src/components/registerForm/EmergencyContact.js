import React, { Component } from 'react'

export default class EmergencyContact extends Component {
    render() {
        return (
            <form className="row">
                <h2 className="step-header">Emergency Contact</h2>
                
                <div>Contact 1:</div>
                <div className="col-6 mb-3">
                    <label className="form-label">First name:</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="col-6 mb-3">
                    <label className="form-label">Last name:</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone number:</label>
                    <input type="number" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Relationship:</label>
                    <select className="form-select">
                        <option selected>Choose...</option>
                        <option value="1">Parent</option>
                        <option value="2">Guardian</option>
                        <option value="3">Spouse</option>
                        <option value="4">Other</option>
                    </select>
                </div>

                <div>Contact 2:</div>
                <div className="col-6 mb-3">
                    <label className="form-label">First name:</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="col-6 mb-3">
                    <label className="form-label">Last name:</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone number:</label>
                    <input type="number" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Relationship:</label>
                    <select className="form-select">
                        <option selected>Choose...</option>
                        <option value="1">Parent</option>
                        <option value="2">Guardian</option>
                        <option value="3">Spouse</option>
                        <option value="4">Other</option>
                    </select>
                </div>
                <div className="text-center" style={{display: "flex", justifyContent: "space-between"}}>
                    <button type="button" style={{backgroundColor: "gray", border: "none"}} onClick={() => this.props.onPrev()} className="btn btn-primary sharp">Back</button>
                    <button type="button" style={{backgroundColor: "#87CEEB", border: "none"}} onClick={() => this.props.onNext()} className="btn btn-primary sharp">Next</button>
                </div>
            </form>
        )
    }
}
