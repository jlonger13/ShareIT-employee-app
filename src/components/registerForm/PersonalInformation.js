import React, { Component } from 'react'

export default class PersonalInformation extends Component {
    render() {
        return (
            <form className="row">
                <h2>Personal Information</h2>

                <div className="col-6 mb-3">
                    <label className="form-label">First name:</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="col-6 mb-3">
                    <label className="form-label">Last name:</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Civil state:</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Nationality:</label>
                    <select className="form-select">
                        <option selected>Choose...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Personal email:</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp"/>
                </div>
                <div className="text-center">
                    <button type="button" onClick={() => this.props.onPrev()} className="btn btn-primary sharp">Back</button>
                    <button type="button" onClick={() => this.props.onNext()} className="btn btn-primary sharp">Next</button>
                </div>
            </form>
        )
    }
}
