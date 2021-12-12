import React, { Component } from 'react';


export default class EmployeeTableRow extends Component {
    render() {
        return (
            <tr>
            <td>{this.props.obj.title}</td>
            <td>{this.props.obj.content}</td>
            <td>{this.props.obj.date}</td>
            <td>{this.props.obj.isFinished}</td>
            <td>{this.props.obj.desc}</td>
            <td>{this.props.obj.user.name}</td>
            <td>
                <button className="button-status2" type="submit">Delete</button>
            </td>
        </tr>
        )
    }
}


