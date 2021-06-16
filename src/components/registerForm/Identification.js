import React, { Component } from 'react'

export default class Identification extends Component {
    render() {
        return (
            <form>
                <h2 className="unbold">Identification</h2>

                <div className="mb-3">
                    <label className="form-label">ID number:</label>
                    <input type="number" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Tax ID number:</label>
                    <input type="number" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Social security number:</label>
                    <input type="number" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Driving license number:</label>
                    <input type="number" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Car number plate:</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="text-center">
                    <button type="button" onClick={() => this.props.onPrev()} className="btn btn-primary sharp">Back</button>
                    <button type="button" onClick={() => this.props.onNext()} className="btn btn-primary sharp">Next</button>
                </div>
            </form>
            
        )
    }
}
