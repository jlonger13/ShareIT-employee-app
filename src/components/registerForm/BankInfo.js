import React, { Component } from 'react'

export default class BankInfo extends Component {
    render() {
        return (
            <form>
                <h2>Bank Information</h2>

                <div className="mb-3">
                    <label className="form-label">Bank name:</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Iban:</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Swift:</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="text-center">
                    <button type="button" onClick={() => this.props.onPrev()} className="btn btn-primary sharp">Back</button>
                </div>
            </form>
        )
    }
}
