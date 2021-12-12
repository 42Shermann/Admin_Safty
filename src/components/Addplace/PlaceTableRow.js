import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

export default class PlaceTableRow extends Component {

    deletePlace = () => {
        axios.delete('http://localhost:9999/delete-place/' + this.props.obj._id)
        .then((res) =>{
            console.log('Place Successfully deleted');
        }).catch((error) => {
            console.log(error)
        })
    }
    render() {
        return (
            <tr>
                <td>{this.props.obj.ZoneID}</td>
                <td>{this.props.obj.ZoneName}</td>
                <td>{this.props.obj.Desc}</td>
                {this.props.obj.Active ? <td>Active</td> : <td>Inactive</td>}

                <div className="reward">
                   <Link to={"/editplace/" + this.props.obj.id}> 
                        <button className="button-status3" type="submit"> Edit </button>
                   </Link>
                    <button className="button-status2" type="submit" onClick={this.deletePlace}>Delete</button>
                </div>
            </tr>
            
            
        )
    }
}
