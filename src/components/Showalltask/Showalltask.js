import React, { Component } from 'react';
import api from '../api/api';
import axios from 'axios';

export default class EmployeeTableRow extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Active: this.props.obj.isFinished
        }
    }


    onChangeActive = (e) => {
        this.setState({ Active: e.target.value})
    }

    onSubmit = (e) =>{
        e.preventDefault();

        const placeObject = {
            Active: this.state.Active
        };

        axios.put(`${api}/api/report/${this.props.obj.id}`, placeObject).then((res) => {
            console.log(res.data);
            alert('Report Successfully Updated');
        }).catch((error) => {
            console.log(error)
        });

    }

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
                <>
                <form className="newUserForm" onSubmit={this.onSubmit}>
                <div className='row'>
                        <label>Active</label>
                        <select className="newUserSelect" name="active" id="Active" value={this.state.Active} onChange={this.onChangeActive}>
                            <option value="Unfinish">Unfinish</option>
                            <option value="Going">Going</option>
                            <option value="Done">Done</option>
                        </select>
                    </div>
                    <div className='row'>
                        <button className="button-status">Edit</button>
                    </div>
                </form>
                </>
            </td>
            <td>
                <button className="button-status2" type="submit">Delete</button>
            </td>
            
        </tr>
        )
    }
}


