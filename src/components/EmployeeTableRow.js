import React, { Component } from 'react';


export default class EmployeeTableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.username}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.position}</td>
                <td>{this.props.obj.phone}</td>
                <td>
                    <button className="button-status2" type="submit">Delete</button>
                </td>
            </tr>
        )
    }
}
