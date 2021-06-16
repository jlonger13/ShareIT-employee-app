import React, { Component } from 'react'

export default class Education extends Component {
    render() {
        return (
            <div>
                <h2 className="step-header">Education</h2>
                grade, course, school

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Course Name</th>
                            <th scope="col">School</th>
                            <th scope="col">Grade</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <div className="text-center">
                        <button type="button" onClick={() => this.props.onPrev()} className="btn btn-primary sharp">Back</button>
                        <button type="button" onClick={() => this.props.onNext()} className="btn btn-primary sharp">Next</button>
                </div>
            </div>
        )
    }
}
