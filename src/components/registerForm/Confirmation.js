import React, { Component } from 'react'

export default class Confirmation extends Component {

    render() {
        return (
            <div>
                <h2>Confirm Details</h2>
                <div className="text-center">
                        <button type="button" onClick={() => this.props.onPrev()} className="btn btn-primary sharp">Back</button>
                        <button type="button" onClick={() => this.props.onNext()} className="btn btn-primary sharp">Submit</button>
                </div>
            </div>
        )
    }
}
